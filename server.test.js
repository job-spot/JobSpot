import request from 'supertest';
import express from 'express';
import { jobRouter } from './routes/api.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ********** Testing for Job Router ********** //
app.use('/api', jobRouter);

describe('Job routes', () => {
  test('GET /api/job should return a list of jobs', async () => {
    const response = await request(app).get('/api/job');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  test('POST /api/job should add a new job', async () => {
    const job = {
      title: 'Software Developer',
      company: 'ACME Inc.',
      location: 'San Francisco',
      salary: '$100,000',
      description:
        'We are looking for a talented software developer to join our team.'
    };
    const response = await request(app).post('/api/job').send(job);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  test('PUT /api/job should update an existing job', async () => {
    const job = {
      title: 'Software Developer',
      company: 'ACME Inc.',
      location: 'San Francisco',
      salary: '$120,000',
      description:
        'We are looking for a talented software developer to join our team.'
    };
    const response = await request(app).put('/api/job').send(job);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  test('DELETE /api/job should delete an existing job', async () => {
    const response = await request(app).delete('/api/job');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
