// const verifyUser = require('../middleware/verifyUser'); // to be added with the JWT LOGIC

const {editCompany, removeACompany, addCompany, getAllCompaniesDetails, getCompanyDetails}  

  export default function (app) {
    app
    .get('api/companies', getAllCompaniesDetails)
    .get('/api/company/:companyId', getCompanyDetails)
    .post('/api/company', addCompany)
    .put('/api/company/:companyId', editCompany)
    .delete('/api/company/:companyId', removeACompany)
  };
  