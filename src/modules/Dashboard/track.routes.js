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
const routes = new Router();

routes.get("/allActions", allActions.allActions);
routes.get("/trackSignUp", trackSignUp.signUp);
routes.get("/trackSignIn", trackSignIn.signIn);
routes.get("/trackUpdateName", trackUpdateName.Update);
routes.get("/trackLogOut", trackLogOut.logOut);
routes.get("/trackDelete", trackDelete.trackDelete);
routes.get("/trackUpdatePassword", trackUpdatePassword.Update);
routes.get("/trackUserActions", trackUserActions.userActions);
routes.delete(
  "/trackDeleteUserActions",
  trackDeleteUserActions.deleteUserActions
);
routes.delete("/trackDeleteAllActions", trackDeleteAllActions.deleteAllActions);

export default routes;
