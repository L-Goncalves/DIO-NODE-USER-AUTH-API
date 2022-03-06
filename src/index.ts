import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users';

const PORTA = 3000;
const app = express();

app.use(usersRoute)

app.get('/status', (req: Request, res: Response, next: NextFunction) =>{
    console.log('Active')

    res.status(200).send({foo: 'bar'})
})


app.listen(PORTA, () => {
    console.log('App está na porta: ', PORTA)
})