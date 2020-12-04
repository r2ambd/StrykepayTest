import { Router } from "express";
import * as allActions from "./allActions";
import * as trackSignUp from "./track.signup";
import * as trackSignIn from "./track.signin";
import * as trackUpdateName from "./track.updateName";
import * as trackLogOut from "./track.logout";
import * as trackDelete from "./track.delete";
import * as trackUpdatePassword from "./track.updatePassword";
import * as trackUserActions from "./track.UserActions";
import * as trackDeleteUserActions from "./track.deleteUserActions";
import * as trackDeleteAllActions from "./track.deleteAllActions";
import isAdmin from "../../Middlewares/isAdmin";
import auth from "../../Middlewares/auth";
const routes = new Router();

routes.get("/allActions", auth, isAdmin, allActions.allActions);
routes.get("/trackSignUp", auth, isAdmin, trackSignUp.signUp);
routes.get("/trackSignIn", auth, isAdmin, trackSignIn.signIn);
routes.get("/trackUpdateName", auth, isAdmin, trackUpdateName.Update);
routes.get("/trackLogOut", auth, isAdmin, trackLogOut.logOut);
routes.get("/trackDelete", auth, isAdmin, trackDelete.trackDelete);
routes.get("/trackUpdatePassword", auth, isAdmin, trackUpdatePassword.Update);
routes.get("/trackUserActions", auth, isAdmin, trackUserActions.userActions);
routes.delete(
  "/trackDeleteUserActions",
  auth,
  isAdmin,
  trackDeleteUserActions.deleteUserActions
);
routes.delete(
  "/trackDeleteAllActions",
  auth,
  isAdmin,
  trackDeleteAllActions.deleteAllActions
);

export default routes;
