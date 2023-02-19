import { IVehicle } from "@/interfaces/IVehicle.interface";
import { db } from "../../db/firebase_config";
import { IVehicleController } from "./interfaces";
import { collection, addDoc, setDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"; 

export class VehicleController implements IVehicleController {

    
    /**
     * 
     * @returns all vehicles
     */
public async getAllVehicles(): Promise<any> {
    let response: any 
    let vehicleArr : any []= [];
    let data: any = {}

    try {
    const querySnapshot = await getDocs(collection(db, "vehicles"));
       const {docs} = querySnapshot
       const data = docs.map(data_vehicle => ({ id: data_vehicle.id, data: data_vehicle.data()}))

response = {
    data
   }
       
    } catch (error: any) {
        response = {
            status: 500,
            message: `[GET /vehicle all] error : ${error}`
        }
    }
  
    return response
}


/**
     * @param {string} id 
     * @returns specific id car
     */
    public async getVehicle(id?: string | undefined): Promise<any> {
        let response: any 

        try {
            if(id) {
                const docRef = doc(db, "vehicles", id);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    response = { id: docSnap.id , data: docSnap.data() };
                    console.log("Document data:", docSnap.data());
                } 
                else {
                    response = {
                    status: 400,
                    message: 'Not Found'
                  }
                }
            }
            else {
                response = {
                    status: 400,
                    message: 'No ID'
                  }
            }
    
        } catch (error: any) {
            response = {
                status: 500,
                message: error
            }
        }
      
        return response
    }



    /**
     * @param {string} id 
     * @returns Success message deleted
     */
    public async deleteVehicle(id: string): Promise<any> {
        let response: any= '';

        try {
            
        const docRef = doc(db, "vehicles", id);
        await updateDoc(docRef, {
            deleted: true
        }).then((r) =>{
            response = {
                status: 200,
                message: `Success - Delete vehicle ${id}`
            }
        });


        } catch (error) {
            response = {
                status: 400,
                message: error
            }
        }


        return response
    }



    /**
     * @param {object} vehicle vehiculo
     * @returns Vehicle info
     */
    public async postVehicle(vehicle: IVehicle ): Promise<any> {
     
        // TODO: VALIDACIONES
        let response: any= '';
        try {
            const docRef = doc(collection(db, 'vehicles' ));
            await setDoc(docRef, vehicle).then((r) =>{
                response = {
                    status: 200,
                    message: `Success - Create vehicle ${vehicle}`
                }
            })


        } catch (error: any) {
            console.log(`[POST /vehicle]  - ${error}`)
            response = {
                status: 500,
                message: `Error creating vehicle ${error}`
            }
        }

        console.log('[POST /vehicle] ')
        return response
    }

    }

    
 
 
