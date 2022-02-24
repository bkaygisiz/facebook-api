import express from 'express';
import routes from './routes/index';

export const launch = () => {
    const port = 3000;
    const app = express();

    app.use(express.json());
    app.use(routes);
    app.get('/', (req, res) => {
        console.log('someone connected');
        res.send('hello u');
    })
    app.listen(port, ()=> {
        console.log(`Listening on localhost:${port}`);
    });
}