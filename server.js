import express from 'express';
import dotenv from 'dotenv/config';
import { connectMongoDB } from './config/mongoDbConnect.js';

const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
connectMongoDB()



// GET route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});