import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const userRoutes = express.Router();

userRoutes.post("/register", register);

userRoutes.post("/login", login);

userRoutes.post("/logout", logout);

export default userRoutes;
