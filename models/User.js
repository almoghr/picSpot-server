import { Schema, model } from "mongoose";
import { isEmail } from "../validators/email-validator";
import { PasswordStrong } from "../validators/password-validator";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: isEmail,
    trim:true
  },
  password: {
    type: String,
    required: true,
    validate: PasswordStrong
  },
  phone: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
    trim:true
  },
  lastname: {
    type: String,
    required: true,
    trim:true
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not supported'
    }

  },
  city: {
    type: String,
    required: true,
    trim:true
  },
  address: {
    type: String,
    required: true,
    trim:true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  activeTask:
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  wallet: {
    balance: { type: Number, default: 0 },
    withdrawals: [
      {
        date: { type: Date, default: Date.now },
        amount: { type: Number, default: 0 },
      },
    ],
  },

  hasCompletedOTP: { type: Boolean },
  isLocationAllowed: { type: Boolean },
  isCameraAllowed: { type: Boolean },

  created: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", UserSchema);

module.exports = User;
