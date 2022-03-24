import { Schema, model } from 'mongoose';


const HistorySchema = new Schema({
    task: {
        type: Schema.Types.ObjectId,
        ref: "Task",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
      },
    status: {
        type: String,
        required: true
    }
});

const  History = model('History', HistorySchema);

module.exports =  History;