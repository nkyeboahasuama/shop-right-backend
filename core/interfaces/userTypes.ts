export interface IUser {
  name: string;

  email: string;

  password: any;

  id?: string;

  phone?: string;

  address?: string;

  profileImage?: string;
}

export interface IUserRepository {
  createUser: (user: IUser) => Promise<IUser>;

  getUserById: (id: string) => Promise<IUser | null>;

  getUserByEmail: (email: string) => Promise<IUser | null>;

  // editUserProfile: (id: string, updateUser: IUser) => Promise<IUser>;

  updatePassword: (id: string, newPassword: string) => Promise<IUser | null>;

  updateUserName: (id: string, newName: string) => Promise<IUser | null>;
}
