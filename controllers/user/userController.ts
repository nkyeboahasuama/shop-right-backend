import { Request, Response } from "express";
import UserUseCasesClass from "../../core/use_cases/userUseCases";
import { UserRepository } from "../../repositories/userRepo";
const jwt = require("jsonwebtoken");

const UserUseCases = new UserUseCasesClass(UserRepository);

const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10h" });
};

export const signUp = async (req: Request, res: Response) => {
  const { newUser } = req.body;
  try {
    const results = await UserUseCases.signUp(newUser);
    if (!results?._id) throw new Error("User missing id parameter");
    const token = createToken(results?._id);
    res.status(200).json({
      name: results.name,
      email: results.email,
      token: token,
    });
  } catch (error: any) {
    res.status(500).json(`${error}`);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { user } = req.body;
  try {
    const results = await UserUseCases.login(user);
    if (!results?._id) throw new Error("User missing id parameter");
    const token = createToken(results._id);

    res.status(200).json({
      name: results.name,
      email: results.email,
      token: token,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
export const userController = { signUp, loginUser };
