import { Model, Schema, model } from "mongoose";
import { IUser } from "../core/interfaces/userTypes";
const bcrypt = require("bcrypt");

interface IDbUser extends IUser {
  _id: string;
}
interface IUserModel extends Model<IUser> {
  signup(user: IUser): Promise<IDbUser>;
  login(user: IUser): Promise<IDbUser>;
}

const userSchema = new Schema<IDbUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (newUser: IUser) {
  const { email, password } = newUser;
  if (!email) throw Error("Error with user email");
  if (!password) throw Error("Error with user password");
  const exists = await this.findOne({ email: email });
  if (exists) throw Error("This user already has an account");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.login = async function (user: IUser) {
  const { email, password } = user;
  const user_object = await this.findOne({ email: email });
  if (!user_object) throw new Error("Incorrect user credentials");
  const match = await bcrypt.compare(password, user_object.password);
  if (!match) throw new Error("Incorrect user password");
  return user_object;
};

export const User = model<IDbUser, IUserModel>("User", userSchema);
