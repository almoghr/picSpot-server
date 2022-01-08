import Company from "../models/Company.js";

export const getAllCompanies = () => {
  return Company.find({});
};

export const getCompany = (companyId) => {
  return Company.find({ _id: companyId });
};

export const createCompany = (company) => {
  const newCompany = new Company(company);
  return newCompany.save();
};

export const deleteCopmpany = (companyId) => {
  return Company.findOneAndDelete({ _id: companyId });
};
