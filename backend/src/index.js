import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './lib/db.js';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import songRoutes from './routes/song.route.js';
import albumRoutes from './routes/album.route.js';


const app = express();
const PORT = process.env.PORT || 5004;

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/songs",songRoutes);
app.use("/api/albums",albumRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port' + PORT);
    connectDB();
    console.log('Connecting to MongoDB URI:', process.env.MONGODB_URI)
})