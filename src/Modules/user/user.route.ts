import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controller";

const router = express.Router();
// alwayes id param route bottom position set otherwise its call first dynamic id route -> alwayes static route first call then dynamic route call
router.get("/", getUsers);
router.get("/admins", getAdminUsers);
router.get("/:id", getUserById);

router.post("/create-user", createUser);

export default router;
