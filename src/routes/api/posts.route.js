import express from 'express';
import * as PostsController from '../../controllers/posts.controller';

const posts = express.Router();

posts.get('/', (req, res) => {
    res.send("Welcome on posts get route");
})

module.exports = posts;