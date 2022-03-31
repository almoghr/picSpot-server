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
        required: true,
        enum: [
          "Failure_blur",
          "Failure_dark",
          "Failure_job_not_done",
          "Failure_out_of_time",
          "Success"
        ],
      },
});

const  History = model('History', HistorySchema);

module.exports =  History;