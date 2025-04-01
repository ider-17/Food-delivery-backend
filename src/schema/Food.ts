import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    price: Number,
});

export const Food = mongoose.model('food', FoodSchema);