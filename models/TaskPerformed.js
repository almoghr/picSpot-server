const mongoose = require('mongoose');


const TaskPerformedSchema = new mongoose.Schema({
 
});

const  TaskPerformed = mongoose.model(' TaskPerformed', TaskPerformedSchema);

module.exports =  TaskPerformed;