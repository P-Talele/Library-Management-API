import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import 'express-async-errors';
import { errorHandler } from './middleware/error.middleware';


export function createApp() {
    const app = express();
    app.use(helmet());
    app.use(morgan('dev'));
    app.use(express.json());morgan
    app.use(errorHandler)
    
    return app;
}