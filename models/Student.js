const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
      type: String,
       required: true,
       unique: true,
       trim: true,
       lowercase: true,
    },
  age: {
      type: Number,
      min: [5],
  },
  classroom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classroom",
  }, { timestamps: true });

module.exports = mongoose.model("Student", StudentSchema);

