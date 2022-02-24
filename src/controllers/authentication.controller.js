import * as AuthenticationModel from '../models/authentication.model'

export const register = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send(await AuthenticationModel.register(email, password));
}