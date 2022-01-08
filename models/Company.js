import { Schema, model } from "mongoose";
import { isEmail } from "../validators/email-validator";
import { PasswordStrong } from "../validators/password-validator";

const CompanySchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: isEmail,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    validate: PasswordStrong,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  logo:{
      type: String,
      required:true,
  },
  name:{
      type: String,
      required:true
  },
  created:{
      type: Date,
      default: Date.now
  }
  
});

const Company = model("Company", CompanySchema);

export default Company;
