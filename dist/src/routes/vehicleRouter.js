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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vehicle_controller_1 = require("../controller/vehicle.controller");
let vehicleRouter = express_1.default.Router();
vehicleRouter.route('/')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`[Get /vehicle]: All vehicles`);
    const controller = new vehicle_controller_1.VehicleController();
    const response = yield controller.getAllVehicles();
    return res.send(response);
}));
vehicleRouter.route('/:id')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    let response;
    console.log(`[Get /vehicle]: id ${id}`);
    if (id) {
        const controller = new vehicle_controller_1.VehicleController();
        response = yield controller.getVehicle(id);
    }
    else {
        response = {
            status: 400,
            message: 'Please provide an ID'
        };
    }
    return res.send(response);
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log(`[DELETE /vehicle]: id ${id}`);
    const controller = new vehicle_controller_1.VehicleController();
    const response = yield controller.deleteVehicle(id);
    return res.send(response);
}));
vehicleRouter.route('/').
    post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { brand, model, year } = req.body;
    const timestamp = Date.now();
    const vehicle = { brand, model, year, timestamp, deleted: false };
    console.log(`[POST /vehicle]: vehicle ${vehicle}`);
    const controller = new vehicle_controller_1.VehicleController();
    const response = yield controller.postVehicle(vehicle);
    return res.send(response);
}));
exports.default = vehicleRouter;
//# sourceMappingURL=vehicleRouter.js.map