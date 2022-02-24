import express from 'express';
import * as UserController from '../../controllers/user.controller';

const user = express.Router();

user.get('/', (req, res) => {
    res.send("Welcome on user get route");
})

user.post('/', UserController.createOne);

module.exports = user;