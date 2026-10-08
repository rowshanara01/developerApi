import { Request, Response } from "express";
import {
  createUserDB,
  getAdminUsersFromDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

// get request
export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();

  res.status(200).json({
    status: "success",
    data: users,
  });
};

// get request by id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

// post request
export const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  const user = await createUserDB(userData);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

// get admin users
export const getAdminUsers = async (req: Request, res: Response) => {
  const user = await getAdminUsersFromDB();

  res.status(200).json({
    status: "success",
    data: user,
  });
};

// pattern
// route  ->  controller  ->  service
