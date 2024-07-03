import express from "express";
import { UserRouter } from "./Routes/user.router.js";
import bodyParser from "body-parser";
import { StudentRouter } from "./Routes/student.router.js";
import CategoryRouter from './Routes/category.router.js';
import SubCategoryRouter from './Routes/subcategory.router.js';
import ProductRouter from './Routes/product.router.js';
import BidRouter from './Routes/bid.router.js';


import cors from 'cors';
import fileUpload from 'express-fileupload';



const app = express();

// config to add bodyParser middleware to handle patch , post, and get type request

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

  //to extract binary content
app.use(fileUpload()); 

  //to allow cross origin request
  app.use(cors());


// user router middleware

app.use("/user", UserRouter);
app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);
app.use("/subcategory",SubCategoryRouter);
app.use("/bid",BidRouter);
app.use("/student", StudentRouter);


app.listen(process.env.PORT);
console.log("server invoked at http://localhost:8081");
