import { UserEntity } from "../entities/userEntity";
import { IUser, IUserRepository } from "../interfaces/userTypes";

class UserUseCasesClass {
  private repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  private async getUserById(id: string): Promise<IUser | null> {
    const response = await this.repository.getUserById(id);
    return response;
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    const response = await this.repository.getUserByEmail(email);
    return response;
  }

  async createUser(user: IUser): Promise<IUser | null> {
    const newUser = new UserEntity(user.name, user.password, user.email);
    newUser.validate();
    const userAlreadyExistence = await this.getUserByEmail(user.email);
    if (userAlreadyExistence) console.log("This email already has an account");
    const response = await this.repository.createUser(user);
    return response;
  }

  async updateUserPassword(
    id: string,
    newPassword: string
  ): Promise<IUser | null> {
    const user = await this.getUserById(id);
    if (!user) throw new Error("This user does not have an account");
    // Revisit this due to the new instance of a user created here
    const updatedUser = new UserEntity(user.name, newPassword, user.email);
    updatedUser.validate();
    const response = await this.repository.updatePassword(id, newPassword);
    return response;
  }

  async updateUserName(id: string, newName: string): Promise<IUser | null> {
    if (newName.length < 3) throw new Error("Username is too short.");
    if (newName.length > 30) throw new Error("Username is too long.");
    const userAlreadyExistence = await this.getUserById(id);
    if (userAlreadyExistence)
      throw new Error("This user already has an account");
    const response = await this.repository.updateUserName(id, newName);
    return response;
  }
}

export default UserUseCasesClass;
