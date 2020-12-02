import { Router } from "express";
import * as allActions from "./allActions";
import * as trackSignUp from "./track.signup";
import * as trackSignIn from "./track.signin";
import * as trackUpdateName from "./track.update";
import * as trackLogOut from "./track.logout";
import * as trackDelete from "./track.delete";
const routes = new Router();

routes.get("/allActions", allActions.allActions);
routes.get("/trackSignUp", trackSignUp.signUp);
routes.get("/trackSignIn", trackSignIn.signIn);
routes.get("/trackUpdateName", trackUpdateName.Update);
routes.get("/trackLogOut", trackLogOut.logOut);
routes.get("/trackDelete", trackDelete.trackDelete);

export default routes;
