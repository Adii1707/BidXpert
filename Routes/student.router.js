import express from "express";
import * as StudentController from "../Controller/Student.controller.js"

export const StudentRouter = express.Router();

/* student Route to get data */
StudentRouter.get("/", StudentController.fetch);

/* student Route to post data */

StudentRouter.post("/save", StudentController.save);

/* student Route to delete data */

StudentRouter.delete("/delete", StudentController.Delete);

/* student Route to patch/update data */

StudentRouter.patch("/update", StudentController.Patch);
