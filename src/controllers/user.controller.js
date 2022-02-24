import * as UserModel from '../models/user.model'

export const createOne = async (req, res) => {
    console.log(req);
    const { client, total, user, uiserId } = req.body;
    const invoice = await InvoiceModel.createOne(client, total, user, uiserId);
    res.status(201).json(invoice);
}