import * as PostsModel from '../models/posts.model'
import jwt from "jsonwebtoken";

export const createOne = async (req, res) => {
    const { message } = req.body;
    const token = req.header('authorization').split(' ')[1];
    const { id } = jwt.decode(token);
    console.log(message);
    res.status(201).send(await PostsModel.createOne(id, message));
}