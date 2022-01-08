import User from "../models/User.js";

export const getAllUsers = () => {
  return User.find({});
};

export const getUser = (userId) => {
  return User.find({ _id: userId });
};

export const createUser = (user) => {
  export const newUser = new User(user);
  return newUser.save();
};

export const deleteUser = (userId) => {
  return User.findOneAndDelete({ _id: userId });
};
