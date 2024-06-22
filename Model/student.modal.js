import mongoose from "mongoose";

/* Students Router SchemaModal */

const StudentSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true, "Name is required"],
    lowercase: true,
    trim: true,
  },
  class: {
    type: String,
    required: [true, "class is required"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  rollno: {
    type: String,
    required: [true, "rollno is required"],
    trim: true,
  },
  fname: {
    type: String,
    required: [true, "fname is required"],
    trim: true,
  },
  mname: {
    type: String,
    required: [true, "Mname is required"],
    trim: true,
  },
  dob: {
    type: String,
    required: [true, "dob is required"],
    trim: true,
  },
  hindi: {
    type: String,
    required: [true, "hindi is required"],
    trim: true,
  },
  english: {
    type: String,
    required: [true, "english is required"],
    trim: true,
  },
  math: String,
  science: String,
  computer: String,
  supplimentry: String,
  div: String,
  res: String,
  total: String,
  
});

const StudentSchemaModel = mongoose.model("student_collection", StudentSchema);

export default StudentSchemaModel;
