
/**
 * Root router
 * REdirector to routers
 */

import express, {Request,Response} from 'express';
import vehicleRouter from './vehicleRouter';
//import usersRouter from './UserRouter';
//import authRouter from './AuthRouter';


let server = express()
let rootRouter = express.Router()


rootRouter.get('/', (req: Request, res: Response) =>{
    res.send("Root api, welcome obelisk1996@gmail.com")
})


//redirection to router & controllers
server.use('/', rootRouter);        // local/api/
server.use('/vehicle', vehicleRouter)   // local/api/vehicle  --> vehicleRouter.ts



export default server