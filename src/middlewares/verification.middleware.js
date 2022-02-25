import jwt from "jsonwebtoken";

export const verify = (req, res, next) => {
    const { token } = req.body;
    console.log(token);
    jwt.verify(token, process.env.TOKEN_SECRET, async (err) => {
        if (err) res.status(401).send("not authorized");
        else
            next();
    })
}