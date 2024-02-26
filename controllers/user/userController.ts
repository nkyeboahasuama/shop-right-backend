import { Request, Response } from "express";
import UserUseCasesClass from "../../core/use_cases/userUseCases";
import { UserRepository } from "../../repositories/userRepo";

const UserUseCases = new UserUseCasesClass(UserRepository);

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const results = await UserUseCases.createUser(user);
    res.status(200).json(results);
  } catch (error: any) {
    res.status(500).json(`Internal error: ${error}`);
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { userEmail } = req.body;
  try {
    const results = await UserUseCases.getUserByEmail(userEmail);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const userController = { createUser, getUser };
