import { db } from '../models/db.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export const authController = {};

authController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  //if there are invalid inputs, return err message to global error handler
  if (!username || !password) {
    return next({ message: { err: 'missing username or password' } });
  }

  try {
    //get user from db

    const sqlQuery = 'SELECT * FROM users WHERE username = $1';
    const values = [username];

    const user = await db.query(sqlQuery, values);

    const verified = await bcrypt.compare(password, user.rows[0].password);

    //if user is verified, return user Id
    if (verified) {
      res.locals.userId = user.rows[0].user_id;
      // res.redirect('/')
      return next();
    } else {
      return next({ message: { err: 'incorrect password' } });
    }
  } catch (err) {
    return next({
      log: 'controller.verifyUser handler caught unknown error',
      message: { err }
    });
  }
};

authController.createUser = async (req, res, next) => {
  const { username, password } = req.body;

  //if invalid inputs return error
  if (!username || !password) {
    return next({ message: { err: 'missing username or password' } });
  }

  try {
    //hash passwords and create user in DB
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const values = [username, hashPassword];
    const sqlQuery =
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING user_id';

    const newUser = await db.query(sqlQuery, values);

    //return userId stored in DB
    res.locals.newUserId = newUser.rows[0];
    // res.redirect('/')
    return next();
  } catch (err) {
    return next({
      log: 'controller.createUser handler caught unknown error',
      message: { err }
    });
  }
};
