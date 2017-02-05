import express from 'express';
import expressJwt from 'express-jwt';
import expressValidation from 'express-validation';
import paramValidation from '../validation/paramValidation';
import eventController from '../controllers/eventController';
import config from '../../config/env';

const router = express.Router();

router
    .route('*')
        .all(expressJwt({ secret: config.jwtSecret }));

router
    .route('/')
        .post(expressValidation(paramValidation.createEvent), eventController.createEvent);

export default router;