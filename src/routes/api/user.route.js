import express from 'express';
import * as UserController from '../../controllers/user.controller';
import * as verificationMidlleware from "../../middlewares/verification.middleware"

const user = express.Router();

user.get('/:id/profile', verificationMidlleware.verify, UserController.getProfile);
user.patch('/:id/profile', verificationMidlleware.verify, UserController.patchProfile);

module.exports = user;