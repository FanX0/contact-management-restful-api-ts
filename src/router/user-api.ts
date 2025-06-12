import express from "express";
import {authMiddleware} from "../middleware/auth-middleware"

const userRouter = express.Router();
userRouter.use(authMiddleware)

export {
    userRouter
}