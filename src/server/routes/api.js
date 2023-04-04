import express from 'express';
export const jobRouter = express.Router();
import { jobController } from '../controllers/jobController.js';

// GET JOB
// http://localhost:3000/api/job
jobRouter.get('/job', jobController.getJob, (req, res) => {
  return res.status(200).json(res.locals.getJobs);
});

// ADD JOB
// http://localhost:3000/api/job
jobRouter.post('/job', jobController.addJob, (req, res) => {
  return res.status(200).json(res.locals.newJob);
});

// Update JOB
// http://localhost:3000/api/job
jobRouter.put('/job', jobController.updateJob, (req, res) => {
  return res.status(200).json(res.locals.updatedJob);
});

// DELETE JOB
// http://localhost:3000/api/job
jobRouter.delete('/job', jobController.deleteJob, (req, res) => {
  return res.status(200).json(res.locals.deletedJob);
});
