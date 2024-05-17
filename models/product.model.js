// import { Timestamp } from "mongodb"; 
// import mongoose from "mongoose";
const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter prodcut name"],
        },
        quantity: {
            type: Number,
            required: [true, "Please enter prodcut quantity"],
        },
        price: {
            type: Number,
            required: [true, "Please enter prodcut price"],
            default: 0,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);
// export default Product;
module.exports = Product


