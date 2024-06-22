import "../Model/connection.js";
import StudentSchemaModel from "../Model/student.modal.js";

/* Post Request Controller */

export const save = async (req, res) => {
  let users = await StudentSchemaModel.find();
  let l = users.length;
  let _id = l == 0 ? 1 : users[l - 1]._id + 1;
  var StudentDetail = {
    ...req.body,
    _id: _id,
  };
  // console.log(userDetail);

  try {
    await StudentSchemaModel.create(StudentDetail);
    res.status(201).json({ status: true });
  } catch (error) {
    // res.status(500);
    res.status(500).json({ status: false });
  }
};

/* Fetch Data/GET Request Controller */

export const fetch = async (req, res) => {
  try {
    const Students = await StudentSchemaModel.find();
    console.log(Students)
    res.status(200).json(Students);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Delete Request Controller */

export const Delete = async (req, res) => {
  const StudentId = req.query._id;
  // console.log(userId)

  try {
    const student = await StudentSchemaModel.findByIdAndDelete(StudentId);

    if (!student) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error.errors);
  }
};

/* patch request Controller */

export const Patch = async (req, res) => {
  const studentId = req.query._id;
  const updates = req.body;
  console.log(updates)

  try {
    const user = await StudentSchemaModel.findByIdAndUpdate(studentId, updates, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

