import express from 'express';
import {
    createProductGallleryController,
    deleteProductGalleryController,
    getProductGallleryController
} from '../Controllers/gallleryController.js';

import multer from 'multer';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';
import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const destinationPath = path.join(__dirname, 'uploads/gallerys');

        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + file.originalname; // Ensure it's a valid string
        cb(null, fileName);
    }
});

const upload = multer({ storage: storage })
const router = express.Router();

router.get(`/get/:id`, getProductGallleryController);
router.post(`/create/:id`, requireSignIn, isAdmin, upload.single('img'), createProductGallleryController);
router.delete(`/delete/:id`, requireSignIn, isAdmin, deleteProductGalleryController)

export default router