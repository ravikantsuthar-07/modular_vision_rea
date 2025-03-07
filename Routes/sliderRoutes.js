import express from 'express';
import {
  createSliderController,
  deleteSliderController,
  getAdminSliderController,
  getSingleAdminSliderController,
  getUserSliderController,
  updateSliderController,
  updateStatusSliderController
} from '../Controllers/sliderController.js';
import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare.js';
import multer from 'multer';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const destinationPath = path.join(__dirname, 'uploads/sliders' ); // Correct path joining
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
});
const upload = multer({ storage: storage });

const router = express.Router();
router.get('/get', getUserSliderController);
router.get('/getAdmin', requireSignIn, isAdmin, getAdminSliderController);
router.get('/getSingleAdmin/:id', requireSignIn, isAdmin, getSingleAdminSliderController);
router.post('/create', requireSignIn, isAdmin, upload.single('img'), createSliderController);
router.put('/update/:id', requireSignIn, isAdmin, upload.single('img'), updateSliderController);
router.put('/updateStatus/:id', requireSignIn, isAdmin, updateStatusSliderController);
router.delete('/delete/:id', requireSignIn, isAdmin, deleteSliderController);

export default router;