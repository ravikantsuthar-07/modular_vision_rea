import express from "express";
import { createAuthController, loginAuthController } from "../Controllers/authController.js";
import { isAdmin, requireSignIn } from '../Middleware/authMiddleWare.js';

const routes = express.Router();

routes.post('/register', createAuthController);
routes.post('/login', loginAuthController);
routes.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.json( {ok: true} )
});

export default routes;