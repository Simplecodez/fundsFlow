import express, { Application, Request, Response } from 'express';
import authRouter from './auth/router/auth.router';
import { AppError } from './utils/general/app.error.utils';
import errorHandler from './error/error.controller';

const app: Application = express();

app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/auth', authRouter);
app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to FundsFlow`);
});
app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(errorHandler);

export { app };
