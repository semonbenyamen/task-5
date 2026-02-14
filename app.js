//first step
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const Product = require("./models/Product");
app.use(express.json());

const mongo_url = process.env.DB_URL;
async function dbconnection() {
    try {
        await mongoose.connect(mongo_url);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
dbconnection();


app.post("/api/products", async (req, res) => {
    try {
        const { productName, price, Quantity, createdBy } = req.body;

        const newProduct = await Product.create({
            productName,
            price,
            Quantity,
            createdBy 
        });

        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running");
});

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find().populate("createdBy", "username email");

        res.json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const POET = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running");
});