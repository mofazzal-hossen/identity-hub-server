
import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    userName: {
        type: String
    },
    // otp: {
    //     type: String,
    //     default: null,
    // },
})

const User = mongoose.model("User", userSchema);

export default User;