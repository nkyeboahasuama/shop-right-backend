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

  async login(user: IUser) {
    const { email, password } = user;
    if (!email || !password) throw new Error("User credentials not complete");
    const response = await this.repository.loginUser(user);
    return response;
  }

  async signUp(user: IUser): Promise<IUser | null> {
    const { email, password } = user;
    if (!email || !password) throw new Error("User credentials not complete");
    const newUser = new UserEntity(user.email, user.password, user.name);
    newUser.validate();
    const response = await this.repository.signUp(newUser);
    return response;
  }

  async updateUserPassword(
    id: string,
    newPassword: string
  ): Promise<IUser | null> {
    const user = await this.getUserById(id);
    if (!user) throw new Error("This user does not have an account");
    // Revisit this due to the new instance of a user created here
    const updatedUser = new UserEntity(user.email, newPassword, user.name);
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
