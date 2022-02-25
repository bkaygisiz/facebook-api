import express from 'express';
import * as UserController from '../../controllers/user.controller';
import * as verificationMidlleware from "../../middlewares/verification.middleware"

const user = express.Router();

user.get('/:id/profile', verificationMidlleware.verify, UserController.getProfile);
user.get('/:id/posts', verificationMidlleware.verify, UserController.getPosts);
user.patch('/:id/profile', verificationMidlleware.verify, UserController.patchProfile);
user.delete('/:id', verificationMidlleware.verify, UserController.deleteProfile);

module.exports = user;