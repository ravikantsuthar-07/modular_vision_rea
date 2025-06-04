import express from 'express';
import { createAboutUsController, deleteAboutUsContoller, getAboutUsController, getSingleAboutUsController, updateAboutUsController } from '../Controllers/aboutUsController.js';
import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare.js';
import multer from 'multer';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const destinationPath = path.join(__dirname, 'uploads/abouts'); // Correct path joining
        if (typeof destinationPath !== 'string') {
            console.error('Invalid destination path:', destinationPath);
        }
        console.log('Destination Path:', destinationPath); // Check the result
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + file.originalname; // Ensure it's a valid string
        if (typeof fileName !== 'string') {
            console.error('Invalid filename:', fileName);
        }
        console.log('File Name:', fileName); // Check the result
        cb(null, fileName);
    }
})
const upload = multer({ storage: storage });

router.get('/get', getAboutUsController);
router.get('/getSingle/:id', getSingleAboutUsController);
router.post('/create', requireSignIn, isAdmin, upload.single('img'), createAboutUsController);
router.put('/update/:id', requireSignIn, isAdmin, upload.single('img'), updateAboutUsController);
router.delete('/delete/:id', requireSignIn, isAdmin, deleteAboutUsContoller);

export default router;