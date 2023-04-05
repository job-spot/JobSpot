//import express
import express from 'express';
export const authRouter = express.Router();

import { authController } from '../controllers/authController.js';

//process signin
//http://localhost:3333/auth/signin
authRouter.post('/signin', authController.verifyUser, (req, res) =>
  res.status(200).json(res.locals.userId)
);

//process signup
//http://localhost:3333/auth/signup
authRouter.post('/signup', authController.createUser, (req, res) =>
  res.status(201).json(res.locals.newUserId)
);
