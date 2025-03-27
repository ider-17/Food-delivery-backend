import mongoose from "mongoose";

const Food = new mongoose.Schema({
    foodname: String,
    price: Number,
    image: String,
    ingredients: String,
    createdAt: Date,
    updatedAt: Date
});

export const FoodSchema = mongoose.model('food', Food)