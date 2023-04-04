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
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unknown error caught in middleware',
    status: 500,
    message: { err: 'an error occured' }
  };
  const errObj = Object.assign({}, defaultErr, err);
  return res.status(errObj.status).json(errObj.message);
});

// listen to server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
