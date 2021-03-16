import 'reflect-metadata'; // Required for TypeORM
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import { resolve } from 'path';
import cloudinary from 'cloudinary';

import router from './router';
import { ErrorHandler } from './app/middlewares';

const app = express();

/**
 * Frontend
 */
app.use(cors());
app.use('/', express.static(resolve(__dirname, 'public')));

/**
 * Backend
 */
cloudinary.v2.config(true);
app.use(express.json());
app.use(helmet());
app.use('/api', router);

/**
 * Exception Handler
 */
app.use(ErrorHandler);

export default app;
