import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserDB = async (payload: IUser): Promise<IUser> => {
  //   const user = await new User({
  //   id: "123456abcd12",
  //   name: {
  //     firstName: "Rasel",
  //     middleName: "",
  //     lastName: "Shah",
  //   },
  //   password: "1234",
  //   role: "Developer",
  //   dateOfBirth: "04-01-2001",
  //   gender: "male",
  //   email: "abc@gmail.com",
  //   contactNo: "01245677677",
  //   presentAddress: "dhaka",
  //   });
  const user = await new User(payload); // User -> class , user -> instance
  await user.save(); // built in instance methods

  console.log(user.fullName()); // custom instance methods
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
