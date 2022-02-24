import express from 'express';
import postsRoutes from './posts.route';
import userRoutes from './user.route';

const api = express.Router();

api.use('/users', userRoutes);
api.use('/posts', postsRoutes);

export default api;