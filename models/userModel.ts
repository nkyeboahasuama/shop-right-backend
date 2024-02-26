import { Schema, model } from "mongoose";
import { IUser } from "../core/interfaces/userTypes";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
