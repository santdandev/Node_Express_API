import { Router, Request, Response } from 'express';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "version-two works!"
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
    const [firstName, lastName, clientId] = data.split(/0000|000/);
    
    res.status(200).json({
        statusCode: 200,
        data: {
            firstName, lastName, clientId: clientId.replace(/(\d{3})(\d{4})/, "$1-$2") 
        }
    })
});

export const VersionTwoController: Router = router;