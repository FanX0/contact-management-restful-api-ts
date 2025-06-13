import express from "express";
import {authMiddleware} from "../middleware/auth-middleware"
import {UserController} from "../controller/user-controller"

const userRouter = express.Router();
userRouter.use(authMiddleware)

// User API
userRouter.get("/api/users/current", UserController.get);
userRouter.patch("/api/users/current", UserController.update);
userRouter.delete("/api/users/current", UserController.logout);

export {
    userRouter
}