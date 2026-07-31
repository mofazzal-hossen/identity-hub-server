
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

    otp: {
        type: String,
        required: true,
        unique: true
    },
    isLogin: {
       type:Boolean,
       default:false
    }
})

const User = mongoose.model("User", userSchema);

export default User;