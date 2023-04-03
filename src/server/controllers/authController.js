import { db } from '../models/db.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export const authController = {};

authController.verifyUser = (req, res, next) => {};

authController.createUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next({ message: 'missing username or password' });
  }

  const hashPassword = await bcrypt.hash(password, saltRounds);
  const values = [username, hashPassword];
  const searchQuery = 'INSERT INTO users (username, password) VALUES ($1, $2)';

  const newUser = await db.query(searchQuery, values);
  res.locals.newUser = newUser;
  return next();
};
