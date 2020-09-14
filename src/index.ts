import express, { Request, Response } from 'express';
import { VersionOneController, VersionTwoController } from './controllers';
import bodyParser from "body-parser";

const port: number = 3000;
const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', VersionOneController);
app.use('/api/v2', VersionTwoController);

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Version urls",
        v1: ['http://localhost:3000/api/v1', 'http://localhost:3000/api/v1/parse'],
        v2: ['http://localhost:3000/api/v2', 'http://localhost:3000/api/v2/parse']
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});