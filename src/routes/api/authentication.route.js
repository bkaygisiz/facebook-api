import express from 'express';
import * as AuthController from "../../controllers/authentication.controller"
const authentication = express.Router();

authentication.get('/', (req, res) => {
    res.send("Welcome on auth route");
})

authentication.post('/register', (req, res) => {
    AuthController.register(req, res);
})

module.exports = authentication;