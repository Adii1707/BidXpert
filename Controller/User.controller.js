import "../Model/connection.js";
import UserSchemaModel from "../Model/user.model.js";
import rs from "randomstring";
import jwt from "jsonwebtoken";
import url from 'url';
import sendMail from './email.controller.js';

/* Post Request Controller */

export const save = async (req, res) => {
  let users = await UserSchemaModel.find();
  let l = users.length;
  let _id = l == 0 ? 1 : users[l - 1]._id + 1;
  var userDetail = {
    ...req.body,
    _id: _id,
    role: "user",
    status: 0,
    inf: Date(),
  };
  // console.log(userDetail);

  try {
    await UserSchemaModel.create(userDetail);
    sendMail(userDetail.email,userDetail.password);
    res.status(201).json({ status: true });
  } catch (error) {
    // res.status(500);
    res.status(500).json({ status: false });
  }
};

/* Fetch Data/GET Request Controller */

export const fetch = async (req, res) => {
  // try {
  //   const users = await UserSchemaModel.find();
  //   res.status(200).json(users);
  // } catch (error) {
  //   res.status(500).json({ error: "Internal Server Error" });
  // }

  var condition_obj=url.parse(req.url,true).query;    
  var userList=await UserSchemaModel.find(condition_obj);
  if(userList.length!=0)
    res.status(200).json(userList);
  else
    res.status(404).json({"status":"Resource not found"});
};

/* Delete Request Controller */

export const Delete = async (req, res) => {
  // const userId = req.query._id;
  // // console.log(userId)

  // try {
  //   const user = await UserSchemaModel.findByIdAndDelete(userId);

  //   if (!user) {
  //     return res.status(404).json({ error: "User not found" });
  //   }

  //   res.status(200).json({ message: "User deleted successfully" });
  // } catch (error) {
  //   res.status(500).json({ error: "Internal Server Error" });
  //   console.log(error.errors);
  // }

  let userDetails = await UserSchemaModel.findOne(req.body);
  if(userDetails){
      let user=await UserSchemaModel.deleteOne(req.body);   
      if(user)
        res.status(200).json({"msg":"success"});
      else
        res.status(500).json({"status": "Server Error"});
  }
  else
    res.status(404).json({"status":"Requested resource not available"});     
};

/* patch request Controller */

export const Patch = async (req, res) => {
  // const userId = req.query._id;
  // const updates = req.body;
  // // console.log(userId)

  // try {
  //   const user = await UserSchemaModel.findByIdAndUpdate(userId, updates, {
  //     new: true,
  //   });

  //   if (!user) {
  //     return res.status(404).json({ error: "User not found" });
  //   }
  //   res.status(200).json({ message: "User updated successfully", user });
  // } catch (error) {
  //   res.status(500).json({ error: "Internal Server Error" });
  // }

  let userDetails = await UserSchemaModel.findOne(req.body.condition_obj);
  if(userDetails){
      let user=await UserSchemaModel.updateOne(req.body.condition_obj,{$set: req.body.content_obj});   
      if(user)
        res.status(200).json({"msg":"success"});
      else
        res.status(500).json({"status": "Server Error"});
  }
  else
    res.status(404).json({"status":"Requested resource not available"});  
};

/* Login Controller */

export const login = async (req, res) => {
  let condition_user = { ...req.body, status: 1 };

  try {
    const userList = await UserSchemaModel.find(condition_user);

    if (userList.length != 0) {
      const payload = userList[0].email;
      const key = rs.generate();
      const token = jwt.sign(payload, key);
      res.status(200).json({ token: token, userDetails: userList[0] });
    } else {
      res.status(500).json({ status: false });
    }
  } catch (error) {
    console.log(error.errors);
  }
};
