import { Schema, model } from 'mongoose';


const TaskSchema = new Schema({
 
});

const  Task = model('Task', TaskSchema);

module.exports =  Task;