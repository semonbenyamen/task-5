const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    Quantity: { type: Number, required: true },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("Classroom", classroomSchema);