import express from 'express';
import dotenv from 'dotenv/config';
import { connectMongoDB } from './src/config/mongoDbConnect.js';
import authRoutes from './src/routes/authRoutes.js'
import { swaggerUi, swaggerSpec } from "./src/config/swagger.js";
const app = express();
const PORT = process.env.PORT || 5000;
// Connect to MongoDB
connectMongoDB()
//swagger doc middleware
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use(express.json());

app.use('/api/v1/auth', authRoutes)



// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});