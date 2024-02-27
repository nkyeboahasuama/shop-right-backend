import { IUser, IUserRepository } from "../core/interfaces/userTypes";
import { User } from "../models/userModel";

const signUp = async (user: IUser) => {
  try {
    const newUser = await User.signup(user);
    return newUser;
  } catch (error: any) {
    throw Error(error.message);
  }
};

const loginUser = async (user_info: IUser) => {
  try {
    const user = await User.login(user_info);
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email: string) => {
  try {
    const user = User.findOne({ email: email });
    return user;
  } catch (error) {
    throw new Error(`Repo error: ${error}`);
  }
};

const getUserById = async (id: string) => {
  try {
    const user = User.findById(id);
    return user;
  } catch (error) {
    throw new Error(`Repo error: ${error}`);
  }
};

const updatePassword = async (id: string, newPassword: string) => {
  try {
    // revisit this
    const user = User.findByIdAndUpdate(id, { password: newPassword });
    return user;
  } catch (error) {
    throw new Error(`Repo error: ${error}`);
  }
};

const updateUserName = async (id: string, newName: string) => {
  try {
    const user = User.findByIdAndUpdate(id, { name: newName });
    return user;
  } catch (error) {
    throw new Error(`Repo error: ${error}`);
  }
};

export const UserRepository: IUserRepository = {
  signUp,
  loginUser,
  getUserByEmail,
  getUserById,
  updatePassword,
  updateUserName,
};
