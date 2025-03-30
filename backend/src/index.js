import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from './routes/user.route.js';

const app = express();
const PORT = process.env.PORT || 5004;


app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/songs",songRoutes);
app.use("/api/albums",albumRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port' + PORT);
})