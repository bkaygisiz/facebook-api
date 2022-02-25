import { PrismaClient } from '@prisma/client';
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const register = async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        res.status(400).send("All inputs are required");
    }
    if (await prisma.user.findUnique({where: {email: email}}))
        res.status(400).send("User already exists");
    else{
        const user = await prisma.user.create({
            data: {
                email,
                password
            }
        })
        await prisma.profile.create({
            data: {
                firstName: "",
                lastName: "",
                userId: user.id
            }
        })
        res.send(user);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        res.status(400).send("All inputs are required");
    }
    const user = await prisma.user.findUnique({
        where: { 
            email: email
        }
    })

    if (!(user))
         res.status(404).send("User not found");
    else if (user.password !== password)
        res.status(401).send("Wrong id's");
    else {
        res.status(200).send({user, token: jwt.sign({id: user.id}, process.env.TOKEN_SECRET)});
    }  
}