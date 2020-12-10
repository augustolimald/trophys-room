/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import Env from '../../env';

export default function (
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  if (Env.get('NODE_ENV') === 'production') {
    return response.status(500).json({ error: 'Ocorreu um erro no lado do servidor' });
  }

  return response.status(500).json({
    error: 'Ocorreu um erro no lado do servidor',
    message: error,
  });
}
