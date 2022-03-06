import * as UserModel from '../models/user.model'

export const getProfile = async (req, res) => {
    const id = req.params.id;
    if(!(id))
        res.status(400).send("Please give a user ID");
    else
        res.send(await UserModel.getProfile(id));
}

export const patchProfile = async (req, res) => {
    const id = req.params.id;
    const {firstName, lastName} = req.body;
    if(!(id))
        res.status(400).send("Please give a user ID");
    else
        res.send(await UserModel.patchProfile(id, firstName, lastName));
}

export const deleteProfile = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    if(!(id))
        res.status(400).send("Please give a user ID");
    else {
        const status = await UserModel.deleteProfile(id);
        res.status(status).send(status);
    }
}

export const getPosts = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    if(!(id))
        res.status(400).send("Please give a user ID");
    else
        res.status(200).send(await UserModel.getPosts(id));
}