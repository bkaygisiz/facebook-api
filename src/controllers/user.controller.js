import * as UserModel from '../models/user.model'
import jwt from "jsonwebtoken";

export const getProfile = async (req, res) => {
    const id = req.params.id;
    if(!(id))
        res.status(400).send("Please give a user ID");
    else
        res.status(200).send(await UserModel.getProfile(id));
}

export const patchProfile = async (req, res) => {
    const id = req.params.id;
    const {firstName, lastName} = req.body;
    if(!(id))
        res.status(400).send("Please give a user ID");
    else
        res.status(200).send(await UserModel.patchProfile(id, firstName, lastName));
}