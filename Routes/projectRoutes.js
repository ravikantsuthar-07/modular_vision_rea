import express from 'express';
import {
    createProjectController,
    deleteProjectController,
    getAdminProjectController,
    getByServiceIdProjectController,
    getCountProjectController,
    getLastProjectController,
    getProjectController,
    getSingleProjectController,
    updateProjectController,
    updateStatusProjectController
} from '../Controllers/projectController.js';

import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare.js';
import multer from 'multer';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const destinationPath = path.join(__dirname, 'uploads/projects');

        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + file.originalname; // Ensure it's a valid string
        cb(null, fileName);
    }
});


const upload = multer({ storage: storage });

const router = express.Router();

router.get('/get', getProjectController);
router.get('/getSingle/:id', getSingleProjectController);
router.get('/getAdmin', requireSignIn, isAdmin, getAdminProjectController);
router.post('/create', requireSignIn, isAdmin, upload.single('img'), createProjectController);
router.put(`/updateStatus/:id`, requireSignIn, isAdmin, updateStatusProjectController);
router.put(`/update/:id`, requireSignIn, isAdmin, upload.single('img'), updateProjectController);
router.delete(`/delete/:id`, requireSignIn, isAdmin, deleteProjectController);
router.get(`/getByServiceId/:id`, getByServiceIdProjectController);
router.get(`/lastProject`, getLastProjectController);
router.get(`/getcountProject`, getCountProjectController)


export default router