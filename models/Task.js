const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
 
});

const  Task = mongoose.model(' Task', TaskSchema);

module.exports =  Task;