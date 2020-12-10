import 'reflect-metadata'; // Required for TypeORM
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import { resolve } from 'path';

import routes from './routes';
import { ErrorHandler } from './app/middlewares';

const app = express();

/**
 * Configuration
 */
app.use(express.json());
app.use(helmet());
app.use(cors());

/**
 * Routes
 */
app.use('/', express.static(resolve(__dirname, 'public')));
app.use('/api', routes);

/**
 * Exception Handler
 */
app.use(ErrorHandler);

export default app;
