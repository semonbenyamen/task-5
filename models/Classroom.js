const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

module.exports = mongoose.model("Classroom", ClassroomSchema);
