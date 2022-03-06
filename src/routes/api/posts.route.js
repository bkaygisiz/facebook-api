import express from 'express';
import * as PostsController from '../../controllers/posts.controller';
import * as verificationMidlleware from "../../middlewares/verification.middleware"

const posts = express.Router();

posts.post('/', verificationMidlleware.simpleVerify, PostsController.createOne);

module.exports = posts;