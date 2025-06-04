import express from 'express';
import { createClientController, deleteClientController, getAdminClientController, getClientController, getSingleClientController, updateClientController, updateStatusClientController } from '../Controllers/clientController.js';
import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare.js';
import multer from 'multer';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const destinationPath = path.join(__dirname, 'uploads/clients');

        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + file.originalname; // Ensure it's a valid string
        cb(null, fileName);
    }
});


const upload = multer({ storage: storage });
const router = express.Router();

router.get(`/get`, getClientController)
router.get(`/getSingle/:id`, requireSignIn, isAdmin, getSingleClientController)
router.get(`/getAdmin`, requireSignIn, isAdmin, getAdminClientController)
router.post(`/create`, requireSignIn, isAdmin, upload.single('img'), createClientController)
router.put(`/update/:id`, requireSignIn, isAdmin, upload.single('img'), updateClientController)
router.put(`/updateStatus/:id`, requireSignIn, isAdmin, updateStatusClientController)
router.delete(`/delete/:id`, requireSignIn, isAdmin, deleteClientController)

export default router