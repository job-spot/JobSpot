import request from 'supertest';
import express from 'express';
import { authRouter } from './routes/auth.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ********** Testing for Auth Router ********** //
app.use('/auth', authRouter);
//test if new user can sign up
describe('/auth/signup', () => {
  describe('POST', () => {
    //testing for valid signup
    it('responds with 201 status and response body containing userId ', async () => {
      const credentials = {
        username: 'testUser',
        password: 'testPassword'
      };
      const response = await (
        await request(app).post('/auth/signup')
      ).send(credentials);
      expect(response.status).toBe(201);
      expect(response.body).toBeDefined();
    });

    //invalid signup should return 500 and error message
    it('responds with 500 status and response body containing error message ', async () => {
      const badCredentials = {
        username: '',
        password: 'testPassword'
      };
      const response = await (
        await request(app).post('/auth/signin')
      ).send(credentials);
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('err');
    });
  });
});
//testing for valid signin
describe('/auth/signin', () => {
  describe('POST', () => {
    it('responds with 200 status and response body containing userId ', async () => {
      const credentials = {
        username: 'testUser',
        password: 'testPassword'
      };
      const response = await (
        await request(app).post('/auth/signin')
      ).send(credentials);
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });

    //invalid signin should return 500 and error message
    it('responds with 500 status and response body containing error message ', async () => {
      const badCredentials = {
        username: 'testUser',
        password: 'incorrectPassword'
      };
      const response = await (
        await request(app).post('/auth/signin')
      ).send(credentials);
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('err');
    });
  });
});
