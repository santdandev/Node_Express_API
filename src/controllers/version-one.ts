import { Router, Request, Response } from 'express';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "version-one works!"
    })
});

router.post('/parse', (req: Request, res: Response) => {
    const { data } = req.body;
    if (!data) {
        return res.status(400).json({
            statusCode: 400,
            message: 'bad request'
        });
    }
    let [firstName, d1, lastName, d2, clientId] = data.split(/(0000|000)/); //split with delimiter
    firstName+=d1; //suffix delimiter
    lastName+=d2; //suffix delimiter

    res.status(200).json({
        statusCode: 200,
        data: {
            firstName, lastName, clientId
        }
    });
});


export const VersionOneController: Router = router;