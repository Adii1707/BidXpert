import mongoose from "mongoose";

/* User Router SchemaModal */

const UserSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true, "Name is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    maxlength: 10,
    minlength: 5,
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, "mobile is required"],
    maxlength: 10,
    minlength: 5,
    trim: true,
  },
  address: {
    type: String,
    required: [true, "address is required"],
    trim: true,
  },
  city: {
    type: String,
    required: [true, "city is required"],
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
    trim: true,
  },
  role: String,
  status: Number,
  inf: String,
});

const UserSchemaModel = mongoose.model("user_collection", UserSchema);

export default UserSchemaModel;
