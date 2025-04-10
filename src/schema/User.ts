import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        enumb: ["ADMIN", "USER"],
    }
},
    {
        timestamps: true,
    }
);

export const User = mongoose.model("user", UserSchema);