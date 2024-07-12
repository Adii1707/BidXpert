import express from "express";
import * as Usercontroller from "../Controller/User.controller.js";

export const UserRouter = express.Router();

/* User Route to get data */
UserRouter.get("/fetch  ", Usercontroller.fetch);

/* User Route to post data */

UserRouter.post("/save", Usercontroller.save);

/* User Route to delete data */

UserRouter.delete("/delete", Usercontroller.Delete);

/* User Route to patch/update data */

UserRouter.patch("/update", Usercontroller.Patch);

/* User Route to login user */

UserRouter.post("/login", Usercontroller.login);
