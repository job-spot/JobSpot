const db = require('../models/db.js');
export const jobController = {};

// GET JOB
jobController.getJob = (req, res, next) => {
  const sqlQuery = 'SELECT * FROM "jobs" ORDER BY date_applied ASC';
  db.query(sqlQuery)
    .then((data) => {
      res.locals.getJobs = data.rows;
      return next();
    })
    .catch((err) => console.log('Error in getting jobs: ', err));
};

// ADD JOB
jobController.addJob = (req, res, next) => {
  const {
    job_id,
    status,
    company,
    position,
    salary,
    date_applied,
    phone_interview_date,
    technical_interview_date,
    comments
  } = req.body;
  // INSERT INTO "WellnessTracker"."moodtracker" (date, mood) VALUES('2023-02-16', '4') ON CONFLICT (date) DO UPDATE SET mood = '4'
  const sqlQuery =
    'INSERT INTO "jobs" (job_id, status, company, position, salary, date_applied, phone_interview_date, technical_interview_date, comments) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);';
  const values = [
    job_id,
    status,
    company,
    position,
    salary,
    date_applied,
    phone_interview_date,
    technical_interview_date,
    comments
  ];
  db.query(sqlQuery, values)
    .then((data) => {
      res.locals.newJob = data;
      return next();
    })
    .catch((err) => console.log('Error in adding job: ', err));
};

// DELETE JOB
jobController.deleteJob = (req, res, next) => {
  const { date } = req.params;
  const sqlQuery = 'DELETE FROM "jobs" WHERE date = $1 RETURNING *';
  const values = [date.slice(0, 25)];
  db.query(sqlQuery, values)
    .then((data) => {
      res.locals.deletedMood = data;
      return next();
    })
    .catch((err) => console.log('Error in deleting job: ', err));
};
