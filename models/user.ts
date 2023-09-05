import { Schema, model, models} from "mongoose";
import mongoose from "mongoose";

const Userschema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
    },
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        minLength: [3, "Full name must be at least 3 characters"],
        maxLength: [30, "Full name must be at most 30 characters"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
})
const User = models.User || model("User", Userschema);
export default User;