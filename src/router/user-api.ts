import express from "express";
import {authMiddleware} from "../middleware/auth-middleware"
import {UserController} from "../controller/user-controller"
import {ContactController} from "../controller/contact-controller"
import { validateNumericId } from "../middleware/validate-id-middleware";


const userRouter = express.Router();
userRouter.use(authMiddleware)

// User API
userRouter.get("/api/users/current", UserController.get);
userRouter.patch("/api/users/current", UserController.update);
userRouter.delete("/api/users/current", UserController.logout);

// Contact API
userRouter.post("/api/contacts", ContactController.create);
userRouter.get("/api/contacts/:contactId", validateNumericId("contactId"), ContactController.get);
userRouter.put("/api/contacts/:contactId", validateNumericId("contactId"), ContactController.update);
userRouter.delete("/api/contacts/:contactId", validateNumericId("contactId"), ContactController.remove);
userRouter.get("/api/contacts", ContactController.search);

export {
    userRouter
}