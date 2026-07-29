import mongoose from "mongoose";
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI;

export const connectMongoDB = () => {
    if (!MONGO_URI) {
        console.error('❌ MONGO_URI is not defined in environment variables');
        process.exit(1);
    }

    mongoose.connect(MONGO_URI)
        .then(() => console.log('✅ Connected to MongoDB'))
        .catch((err) => {
            console.error('❌ Connection error:', err);
            process.exit(1);
        });
};