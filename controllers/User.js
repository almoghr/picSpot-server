import { getAllUsers, getUser, deleteUser,getUserHistory, createUser } from "../services/User";
const serverResponse = require("../utils/serverResponse");
const { userAllowedUpdates } = require("../utils/allowedUpdates");

export const getUserDetails = async (req, res) => {
  try {
    const user = await getUser(req.params.userId);

    if (!user) {
      return serverResponse(res, 404, { message: "user doesn't exist" });
    }

    return serverResponse(res, 200, user);
  } catch (e) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to get user details",
    });
  }
};

export const getUserHistoryDetails = async (req, res) => {
  try {
    // const user = await getUser(req.params.userId);

    // if (!user) {
    //   return serverResponse(res, 404, { message: "user doesn't exist" });
    // }

    const history = await getUserHistory(req.params.userId);

    if (!history) {
      return serverResponse(res, 404, { message: "The user has no task history" });
    }

    return serverResponse(res, 200, history);
  } catch (e) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to get user task history",
    });
  }
};

export const getAllUsersDetails = async (req, res) => {
  try {
    const users = await getAllUsers();

    return serverResponse(res, 200, users);
  } catch (e) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to get all users details",
    });
  }
};

export const addUser = async (req, res) => {
  try {
    const user = {
      ...req.body,
    };

    const newUser = createUser(user);

    return serverResponse(res, 200, newUser);
  } catch (error) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to create a user",
    });
  }
};

export const removeAUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await getUser(id);

    if (!user) {
      return serverResponse(res, 404, { message: "user doesn't exist" });
    }

    const deletedUser = await deleteUser(id);
    return serverResponse(res, 200, deletedUser);
  } catch (error) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to remove a user",
    });
  }
};

export const editUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    userAllowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return serverResponse(res, 400, { message: "Invalid updates" });
  }

  try {
    const user = await getUser({ _id: req.params.id });
    if (!user) {
      return serverResponse(res, 404, { message: "user does not exist" });
    }
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    return serverResponse(res, 200, user);
  } catch (err) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to update user",
    });
  }
};
