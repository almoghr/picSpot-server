import { getAllCompanies, getCompany, deleteCompany, createCompany } from "../services/User";
const serverResponse = require("../utils/serverResponse");
const { companyAllowedUpdates } = require("../utils/allowedUpdates");

export const getCompanyDetails = async (req, res) => {
  try {
    const company = await getCompany(req.params.companyId);

    if (!company) {
      return serverResponse(res, 404, { message: "company doesn't exist" });
    }

    return serverResponse(res, 200, company);
  } catch (e) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to get company details",
    });
  }
};

export const getAllCompaniesDetails = async (req, res) => {
  try {
    const companies = await getAllCompanies();

    return serverResponse(res, 200, companies);
  } catch (e) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to get all companies details",
    });
  }
};

export const addCompany = async (req, res) => {
  try {
    const company = {
      ...req.body,
    };

    const newCompany = createCompany(company);

    return serverResponse(res, 200, newCompany);
  } catch (error) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to create a company",
    });
  }
};

export const removeACompany = async (req, res) => {
  try {
    const id = req.params.userId;
    const company = await getCompany(id);

    if (!company) {
      return serverResponse(res, 404, { message: "company doesn't exist" });
    }

    const deletedCompany = await deleteCompany(id);
    // TODO: delete all the tasks of the company thats being deleted
    return serverResponse(res, 200, deletedCompany);
  } catch (error) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to remove a company",
    });
  }
};

export const editCompany = async (req, res) => {
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    companyAllowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return serverResponse(res, 400, { message: "Invalid updates" });
  }

  try {
    const company = await getCompany({ _id: req.params.id });
    if (!company) {
        return serverResponse(res, 404, { message: "company does not exist" });
    }
    updates.forEach((update) => (company[update] = req.body[update]));
    await company.save();
    return serverResponse(res, 200, company);
  } catch (err) {
    return serverResponse(res, 500, {
      message: "Internal error while trying to update company",
    });
  }
};
