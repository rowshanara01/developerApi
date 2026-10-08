// step1. interface design

import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  password: string;
  role: "Developer";
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  presentAddress: string;
}

// instance methods
export interface IUserMethods {
  fullName(): string;
}

// statics method

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
