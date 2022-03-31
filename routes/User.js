// const verifyUser = require('../middleware/verifyUser'); // to be added with the JWT LOGIC

import {editUser, removeAUser, addUser, getAllUsersDetails, getUserDetails} from '../controllers/User'
// const {editUser, removeAUser, addUser, getAllUsersDetails, getUserDetails}  

  export default function (app) {
    app
    .get('api/users', getAllUsersDetails)
    .get('/api/user/:userId', getUserDetails)
    .post('/api/user', addUser)
    .put('/api/user/:userId', editUser)
    .delete('/api/user/:userId', removeAUser)
  };
  