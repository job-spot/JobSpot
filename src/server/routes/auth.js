//import express
import express from 'express';
export const authRouter = express.Router();

import { authController } from '../controllers/authController.js';

//process signin
authRouter.post('/signin', authController.verifyUser, (req, res) =>
  res.status(203).json(res.locals.user)
);

//process signup
authRouter.post('/signup', authController.createUser, (req, res) =>
  res.status(203).json(res.locals.newUser)
);
