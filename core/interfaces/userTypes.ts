// export interface BaseUser

export interface IUser {
  name?: string;

  email: string;

  password: any;

  _id?: string;

  phone?: string;

  address?: string;

  profileImage?: string;
}

export interface IUserRepository {
  signUp: (user: IUser) => Promise<IUser>;

  loginUser: (user: IUser) => Promise<IUser>;

  getUserById: (id: string) => Promise<IUser | null>;

  getUserByEmail: (email: string) => Promise<IUser | null>;

  // editUserProfile: (id: string, updateUser: IUser) => Promise<IUser>;

  updatePassword: (id: string, newPassword: string) => Promise<IUser | null>;

  updateUserName: (id: string, newName: string) => Promise<IUser | null>;
}
