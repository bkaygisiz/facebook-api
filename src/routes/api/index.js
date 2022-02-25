import express from 'express';
import postsRoutes from './posts.route';
import userRoutes from './user.route';
import authenticationRoutes from './authentication.route';
import handleError from "../../middlewares/errorHandler.middleware";

const api = express.Router();

api.use('/users', userRoutes);
api.use('/posts', postsRoutes);
api.use('/authentication', authenticationRoutes);

export default api;