import express from 'express';
import { authRouter } from './routes/auth.js';
import { jobRouter } from './routes/api.js';
const app = express();
const PORT = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ********** Authentication Router ********** //
app.use('/auth', authRouter);

// ********** Job Router ********** //
app.use('/api', jobRouter);

// ********** Catch-all Err Handler ********** //
app.use('*', (req, res) => res.status(404).json('ERROR 404: not found'));

// ********** Global Err Handler ********** //
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
