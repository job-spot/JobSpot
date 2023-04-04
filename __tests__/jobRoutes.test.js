import request from 'supertest';
import express from 'express';
import { jobRouter } from './routes/api.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ********** Testing for Job Router ********** //
app.use('/api', jobRouter);

describe('Job routes', () => {
  // testing for GET JOB
  it('GET /api/job should return a list of jobs for a particular user', async () => {
    const job = {
      user_id: 5
    };
    const response = await request(app).get('/api/job').send(job);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  // testing for ADD JOB
  it('POST /api/job should add a new job for a particular user', async () => {
    const job = {
      status: 'applied',
      company: 'Spotify',
      position: 'frontend software engineer',
      salary: '160000',
      date_applied: '2023-03-04',
      phone_interview_date: '2023-03-15',
      user_id: 5
    };
    const response = await request(app).post('/api/job').send(job);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  // testing for UPDATE JOB
  it('PUT /api/job should update an existing job for a particular user', async () => {
    const job = {
      status: 'offered',
      company: 'Spotify',
      position: 'frontend software engineer',
      salary: '160000',
      date_applied: '2023-03-04',
      phone_interview_date: '2023-03-15',
      technical_interview_date: '2023-03-24',
      comments: 'liked culture at company',
      user_id: 5,
      job_id: 50
    };
    const response = await request(app).put('/api/job').send(job);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  // testing for DELETE JOB
  it('DELETE /api/job should delete an existing job for a particular user', async () => {
    const job = {
      user_id: 5,
      job_id: 50
    };
    const response = await request(app).delete('/api/job').send(job);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
