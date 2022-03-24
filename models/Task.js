import { Schema, model } from 'mongoose';


const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    branch: {
        type: Schema.Types.ObjectId,
        ref: "Branch",
        required: true
    },
    payment: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const  Task = model('Task', TaskSchema);

module.exports =  Task;