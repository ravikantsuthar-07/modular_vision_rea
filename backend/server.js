import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import cors from 'cors'
import authRoutes from "./Routes/authRoutes.js";
import sliderRoutes from './Routes/sliderRoutes.js';
import factsRoutes from './Routes/factRoutes.js';
import aboutusRoutes from './Routes/aboutusRoutes.js'
import serviceRoutes from './Routes/serviceRoutes.js'
import projectRoutes from './Routes/projectRoutes.js'
import clientRoutes from './Routes/clientRoutes.js'
import appointmentRoutes from './Routes/appointmentRoutes.js'
import galleryRoutes from './Routes/galleryRoutes.js'

dotenv.config();

const app = express();

app.use(cors("*"))
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/slider', sliderRoutes);
app.use('/api/v1/facts', factsRoutes);
app.use('/api/v1/about', aboutusRoutes);
app.use('/api/v1/service', serviceRoutes);
app.use('/api/v1/project', projectRoutes);
app.use(`/api/v1/client`, clientRoutes);
app.use(`/api/v1/appointment`, appointmentRoutes);
app.use(`/api/v1/gallery`, galleryRoutes);

app.use('/static', express.static(path.join(__dirname + '/Routes/uploads')));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});