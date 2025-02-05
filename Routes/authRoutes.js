import express from "express";
import { createAuthController, loginAuthController } from "../Controllers/authController.js";

const routes = express.Router();

routes.post('/register', createAuthController);
routes.post('/login', loginAuthController);

export default routes;