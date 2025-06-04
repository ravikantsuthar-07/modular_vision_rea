import express from 'express';
import { createServiceController, deleteServiceController, getAdminServiceController, getCountServiceController, getLastServiceController, getServiceController, getSingleServiceController, updateServiceController, updateSstatusServiceController } from '../Controllers/serviceController.js';
import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare.js'; 
import multer from 'multer';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const destinationPath = path.join(__dirname, 'uploads/services' ); // Correct path joining
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


const router = express.Router()

router.get('/get', getServiceController);
router.get('/getLast', getLastServiceController);
router.get('/getSingle/:id', getSingleServiceController);
router.get('/getAdmin', requireSignIn, isAdmin, getAdminServiceController);
router.post('/create', requireSignIn, isAdmin, upload.single('img'), createServiceController);
router.put('/updateStatus/:id', requireSignIn, isAdmin, updateSstatusServiceController);
router.put('/update/:id', requireSignIn, isAdmin, upload.single('img'), updateServiceController);
router.delete('/delete/:id', requireSignIn, isAdmin, deleteServiceController);
router.get(`/getCountService`, getCountServiceController)


export default router; 