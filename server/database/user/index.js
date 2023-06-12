import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: String,
    address: [
      {
        detail: String,
        for: String,
      }
    ],
    phoneNumber: [ Number ],
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateJwtToken = function () { };

UserSchema.statics.findByEmailAndPhone = async () => {};

UserSchema.statics.findByEmailAndPassword = async () => {};


export const UserModel = mongoose.model("users", UserSchema);