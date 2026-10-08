import { model, Schema } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

// step2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },

  dateOfBirth: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ["male", "female"],
  },

  email: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
});

// create instance method
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// create statics method
userSchema.static("getAdminUsers", async function getAdminUsersFromDB() {
  const admins = await this.find({ role: "admin" });
  return admins;
});
// step3. Create a Model.
const User = model<IUser, UserModel>("User", userSchema);

export default User;
