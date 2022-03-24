import { Schema, model } from 'mongoose';


const BranchSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },
    address: {
        type: String,
        required: true,
        trim:true,
    },
    tasks: [
        {
          type: Schema.Types.ObjectId,
          ref: "Task",
        },
      ],
    geoLocation: {
        latitude:{
            type: Number,
            required: true
        },
        longitude:{
            type: Number,
            required: true
        }
    },
});

const  Branch = model('Branch', BranchSchema);

module.exports =  Branch;