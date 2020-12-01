import { Router } from "express";
import auth from "../../Middlewares/auth";
import * as userController from "./user.controller";
import * as userSignIn from "./user.signin";
import * as userUpdate from "./user.update";
import * as userSignOut from "./user.signout";
import * as deleteUser from "./user.delete";
const routes = new Router();
routes.post("/signup", userController.signUp);
routes.post("/signin", userSignIn.signIn);
routes.put("/update", auth, userUpdate.update);
routes.get("/signout", auth, userSignOut.singout);
routes.delete("/delete", auth, deleteUser.deleteUser);

export default routes;
