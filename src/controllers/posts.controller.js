import * as PostsModel from '../models/posts.model'
import jwt from "jsonwebtoken";

export const createOne = async (req, res) => {
    const { message } = req.body;
    const token = req.header('authorization').split(' ')[1];
    const { id } = jwt.decode(token);
    console.log(message);
    res.status(201).send(await PostsModel.createOne(id, message));
}

export const getPost = async (req, res) => {
    const { id } = req.params;
    console.log(parseInt(id))
    if(!(id) || !parseInt(id))
        res.status(400).send("Please give a correct ID");
    else
        res.status(200).send(await PostsModel.getPost(id))
    
}

export const getPosts = async (req, res) => {
    const token = req.header('authorization').split(' ')[1];
    const { id } = jwt.decode(token);
    res.send(await PostsModel.getPosts(id));
}