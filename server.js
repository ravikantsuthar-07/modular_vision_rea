import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./Routes/authRoutes.js";

dotenv.config();

const app = express();


app.use('/api/v1/auth', authRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});