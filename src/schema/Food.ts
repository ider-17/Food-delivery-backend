import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    createdAt: Date,
    updatedAt: Date
});

export const Food = mongoose.model('food', FoodSchema);