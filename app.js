//first step
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const Classroom = require("./models/Classroom");
const Student = require("./models/Student");

async function dbconnection() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/firstApp");
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
dbconnection();


app.post("/api/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.json({ error: error });
  }
});

app.post("/api/classrooms", async (req, res) => {
  try {
    const classroom = await Classroom.create(req.body);

    res.json({
      success: true,
      data: classroom,
    });
  } catch (error) {
    res.json({ error: error });
  }
});


app.get("/api/classrooms", async (req, res) => {
  try {
    const classrooms = await Classroom.find()
      .populate("students");

    res.json({
      success: true,
      data: classrooms,
    });
  } catch (error) {
   console.log(error);
  }
});


const POET = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running");
});
