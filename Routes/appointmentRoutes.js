import express from 'express'
import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare.js';
import { 
    createAppointmentController,
    createContactAppointmentController,
    getAppointmentController,
    getContactAppointmentController,
    getCountAppointmentController,
    getCountContactController
} from '../Controllers/appointmentController.js';

const router = express.Router();

router.get(`/get`, requireSignIn, isAdmin, getAppointmentController);
router.post(`/create`, createAppointmentController)
router.get(`/getCountAppointment`, getCountAppointmentController)

router.get(`/getContact`, requireSignIn, isAdmin, getContactAppointmentController);
router.post(`/createContact`, createContactAppointmentController)
router.get(`/getCountContact`, getCountContactController)


export default router