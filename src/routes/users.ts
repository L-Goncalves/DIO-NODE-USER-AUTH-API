import {NextFunction, Request, Response, Router} from 'express';

const usersRoute = Router()


usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{username: 'Renan'}];

    res.status(200).send(users)


})

export default usersRoute;