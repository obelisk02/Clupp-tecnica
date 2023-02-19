"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleController = void 0;
const firebase_config_1 = require("../../db/firebase_config");
const firestore_1 = require("firebase/firestore");
class VehicleController {
    /**
     *
     * @returns all vehicles
     */
    getAllVehicles() {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            let vehicleArr = [];
            let data = {};
            try {
                const querySnapshot = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(firebase_config_1.db, "vehicles"));
                const { docs } = querySnapshot;
                const data = docs.map(data_vehicle => ({ id: data_vehicle.id, data: data_vehicle.data() }));
                response = {
                    data
                };
            }
            catch (error) {
                response = {
                    status: 500,
                    message: `[GET /vehicle all] error : ${error}`
                };
            }
            return response;
        });
    }
    /**
         * @param {string} id
         * @returns specific id car
         */
    getVehicle(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                if (id) {
                    const docRef = (0, firestore_1.doc)(firebase_config_1.db, "vehicles", id);
                    const docSnap = yield (0, firestore_1.getDoc)(docRef);
                    if (docSnap.exists()) {
                        response = { id: docSnap.id, data: docSnap.data() };
                        console.log("Document data:", docSnap.data());
                    }
                    else {
                        response = {
                            status: 400,
                            message: 'Not Found'
                        };
                    }
                }
                else {
                    response = {
                        status: 400,
                        message: 'No ID'
                    };
                }
            }
            catch (error) {
                response = {
                    status: 500,
                    message: error
                };
            }
            return response;
        });
    }
    /**
     * @param {string} id
     * @returns Success message deleted
     */
    deleteVehicle(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = '';
            try {
                const docRef = (0, firestore_1.doc)(firebase_config_1.db, "vehicles", id);
                yield (0, firestore_1.updateDoc)(docRef, {
                    deleted: true
                }).then((r) => {
                    response = {
                        status: 200,
                        message: `Success - Delete vehicle ${id}`
                    };
                });
            }
            catch (error) {
                response = {
                    status: 400,
                    message: error
                };
            }
            return response;
        });
    }
    /**
     * @param {object} vehicle vehiculo
     * @returns Vehicle info
     */
    postVehicle(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: VALIDACIONES
            let response = '';
            try {
                const docRef = (0, firestore_1.doc)((0, firestore_1.collection)(firebase_config_1.db, 'vehicles'));
                yield (0, firestore_1.setDoc)(docRef, vehicle).then((r) => {
                    response = {
                        status: 200,
                        message: `Success - Create vehicle ${vehicle}`
                    };
                });
            }
            catch (error) {
                console.log(`[POST /vehicle]  - ${error}`);
                response = {
                    status: 500,
                    message: `Error creating vehicle ${error}`
                };
            }
            console.log('[POST /vehicle] ');
            return response;
        });
    }
}
exports.VehicleController = VehicleController;
//# sourceMappingURL=vehicle.controller.js.map