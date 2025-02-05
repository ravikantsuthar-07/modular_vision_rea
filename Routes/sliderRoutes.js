import express from 'express';
import { 
    createSliderController,
    deleteSliderController, 
    getAdminSliderController, 
    getUserSliderController, 
    updateSliderController, 
    updateStatusSliderController 
} from '../Controllers/sliderController';
import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'img' ) {
            cb(null, process.cwd() + '/assets/slider/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.extension);
    }
});
const upload = multer({ storage: storage });

const router = express.Router();
router.get('/get', getUserSliderController);
router.post('/getAdmin', requireSignIn, isAdmin, getAdminSliderController);
router.post('/create', requireSignIn, isAdmin, upload.single('img'), createSliderController);
router.put('/update/:id', requireSignIn, isAdmin, upload.single('img'), updateSliderController);
router.put('/updateStatus/:id', requireSignIn, isAdmin, updateStatusSliderController);
router.delete('/delete/:id', requireSignIn, isAdmin, deleteSliderController);

export default router;