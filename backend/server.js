import express from "express";
import "dotenv/config";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./config/db.js";
import userRoute from "./Routes/userRoute.js";

// Set port and initialize app
const port = 5000;
const app = express();

// Connect to the database
connectDB();

// Increase request size limit (for larger files or payloads)
app.use(express.json({ limit: '50mb' }));  // Increase limit to 50MB (adjust as needed)
app.use(express.urlencoded({ limit: '50mb', extended: true }));  // For form-data (like file uploads)

// Enable CORS
app.use(cors());

// Serve static files (uploaded images, etc.)
app.use('/uploads', express.static('uploads'));

// Use routes
app.use("/api/user/", userRoute);

// Test route
app.get('/', (req, res) => {
    res.send('Hello World!🔥😎');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
