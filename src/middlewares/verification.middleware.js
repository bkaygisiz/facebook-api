import jwt from "jsonwebtoken";

//this functions checks if the token is valid and ALSO is the token corresponds to the user who will be updated or deleted
export const verify = (req, res, next) => {
    const token = req.header('authorization').split(' ')[1];
    const { id } = req.params;
    jwt.verify(token, process.env.TOKEN_SECRET, async (err) => {
        if (err) res.status(401).send("not authorized");
        else {
            const decoded = jwt.decode(token)
            if (id === decoded.id)
                next();
            else
                res.status(401).send("Wrong user");
        }
    })
}

//this fuction only verify if the token is valid ( for posts routes )
export const simpleVerify = (req, res, next) => {
    const token = req.header('authorization').split(' ')[1];
    const { id } = req.params;
    jwt.verify(token, process.env.TOKEN_SECRET, async (err) => {
        if (err) res.status(401).send("not authorized");
        else {
            next();
        }
    })
}