import express from 'express';
import { createFactsController, deleteFactController, getAdminFactsController, getFactsController, updateFactsController, updateStatusFactController } from '../Controllers/factsController.js';
import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare.js';

const router = express.Router();

router.get('/get', getFactsController)
router.get('/getAdmin', requireSignIn, isAdmin, getAdminFactsController);
router.post('/create', requireSignIn, isAdmin, createFactsController);
router.put('/update/:id', requireSignIn, isAdmin, updateFactsController);
router.put('/updateStatus/:id', requireSignIn, isAdmin, updateStatusFactController);
router.delete('/delete/:id', requireSignIn, isAdmin, deleteFactController)



export default router;