import { IVehicle } from "../../interfaces/IVehicle.interface";

export interface IVehicleController {

    getVehicle(id?: string): Promise<any>

    deleteVehicle(id: string): Promise <any>

    postVehicle(vehicle: IVehicle): Promise <any>
}
