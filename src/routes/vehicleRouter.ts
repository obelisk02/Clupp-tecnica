//import { BasicResponse } from '@/controller/types';
import { IVehicle } from '../interfaces/IVehicle.interface';
import express, {Request, Response} from 'express';
import {VehicleController} from '../controller/vehicle.controller'

let vehicleRouter = express.Router();


vehicleRouter.route('/')
    .get(async ( res: Response)=>{

        console.log(`[Get /vehicle]: All vehicles`);

        const controller: VehicleController = new VehicleController();
        const response: any = await  controller.getAllVehicles()

        return res.send(response)
    })

vehicleRouter.route('/:id')
    .get(async (req: Request, res: Response)=>{
        
        let id: any = req?.params?.id;
        console.log(`[Get /vehicle]: id ${id}`);
    
        const controller: VehicleController = new VehicleController();
        const response: any = await  controller.getVehicle(id)

        return res.send(response)
    })

   

    .delete(async (req: Request, res: Response)=>{
        const id: any = req.params.id
        console.log(`[DELETE /vehicle]: id ${id}`);

        const controller: VehicleController = new VehicleController();
        const response: any = await  controller.deleteVehicle(id)

        return res.send(response)

    })

    vehicleRouter.route('/').
    post(async (req: Request, res: Response)=>{
        const { brand, model, year } :any = req.body;
        const timestamp = Date.now();
        const vehicle: IVehicle = { brand, model, year, timestamp, deleted:false };
        console.log(`[POST /vehicle]: vehicle ${vehicle}`);

        const controller: VehicleController = new VehicleController();
        const response: any = await  controller.postVehicle(vehicle)

        return res.send(response)
    })

    export default vehicleRouter