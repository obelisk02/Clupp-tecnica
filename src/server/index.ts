
import express, {Express, Request, Response} from 'express';


// Seguridad
import cors from 'cors';
import helmet from 'helmet';


// Root routes
import rootRouter from '../routes'

const server: Express = express();

//Content type config
server.use(express.urlencoded({
    extended:true,
    limit: '50mb'
}))

server.use(express.json({ limit:'50mb'}))


// de aqui la ruta locaslhost:3000/api/....
server.use('/api', rootRouter)
server.use(express.static('public'));


// FireStore connect
import {db} from '../../db/firebase_config';
console.log(db)


//Seguridad 
server.use(helmet());
server.use(cors());





//Redireccionar locahost:3000 --> localhost:3000/api
server.get('/', (req: Request, res: Response) =>{
    res.redirect('/api')
})

export default server
