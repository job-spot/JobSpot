import { db } from '../models/db.js';
export const jobController = {};

// GET JOB
// TESTED: SELECT * FROM jobs WHERE user_id = 1
jobController.getJob = (req, res, next) => {
  const { user_id } = req.body;
  const sqlQuery = 'SELECT * FROM jobs WHERE user_id = $1 RETURNING *';
  const values = [user_id];
  db.query(sqlQuery, values)
    .then((data) => {
      res.locals.getJobs = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'error caught jobController.getJob middleware',
        message: { err }
      })
    );
};

// ADD JOB
// TESTED: INSERT INTO jobs (status, company, position, salary, date_applied, phone_interview_date, technical_interview_date, comments) VALUES('applied', 'walmart', 'frontend software engineeer', '170000', '2023-01-25', '2023-01-28', '2023-02-03', 'technical interview was hard', '1')
jobController.addJob = (req, res, next) => {
  const {
    status,
    company,
    position,
    salary,
    date_applied,
    phone_interview_date,
    technical_interview_date,
    comments,
    user_id
  } = req.body;
  const sqlQuery =
    'INSERT INTO jobs (status, company, position, salary, date_applied, phone_interview_date, technical_interview_date, comments, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) ;';
  const values = [
    status,
    company,
    position,
    salary,
    date_applied,
    phone_interview_date,
    technical_interview_date,
    comments,
    user_id
  ];
  db.query(sqlQuery, values)
    .then((data) => {
      res.locals.newJob = data;
      return next();
    })
    .catch((err) =>
      next({
        log: 'error caught jobController.addJob middleware',
        message: { err }
      })
    );
};

// UPDATE JOB
jobController.updateJob = (req, res, next) => {
  const {
    status,
    company,
    position,
    salary,
    date_applied,
    phone_interview_date,
    technical_interview_date,
    comments,
    user_id,
    job_id
  } = req.body;
  const sqlQuery =
    'UPDATE jobs SET status = $1, company = $2, position = $3, salary = $4, date_applied = $5, phone_interview_date = $6, technical_interview_date = $7, comments = $8  WHERE user_id = $9 AND job_id = $10 RETURNING *';
  const values = [
    status,
    company,
    position,
    salary,
    date_applied,
    phone_interview_date,
    technical_interview_date,
    comments,
    user_id,
    job_id
  ];
  db.query(sqlQuery, values)
    .then((data) => {
      res.locals.updatedJob = data;
      return next();
    })
    .catch((err) =>
      next({
        log: 'error caught jobController.updateJob middleware',
        message: { err }
      })
    );
};

// DELETE JOB
// TESTED: DELETE FROM jobs WHERE user_id = 3 RETURNING *
jobController.deleteJob = (req, res, next) => {
  const { user_id } = req.body;
  const sqlQuery = 'DELETE FROM jobs WHERE user_id = $1 RETURNING *';
  const values = [user_id];
  db.query(sqlQuery, values)
    .then((data) => {
      res.locals.deletedMood = data;
      return next();
    })
    .catch((err) =>
      next({
        log: 'error caught jobController.deleteJob middleware',
        message: { err }
      })
    );
};
