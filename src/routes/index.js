import express from 'express';
import apiRoutes from './api/index';

const api = express.Router();

api.use('/api/v1', apiRoutes)

api.get('/api/v1', (req, res) => {
    res.send("Welcome on api route")
})


export default api;