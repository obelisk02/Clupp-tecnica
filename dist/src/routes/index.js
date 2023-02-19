"use strict";
/**
 * Root router
 * REdirector to routers
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vehicleRouter_1 = __importDefault(require("./vehicleRouter"));
//import usersRouter from './UserRouter';
//import authRouter from './AuthRouter';
let server = (0, express_1.default)();
let rootRouter = express_1.default.Router();
rootRouter.get('/', (req, res) => {
    res.send("Root api, welcome obelisk1996@gmail.com");
});
//redirection to router & controllers
server.use('/', rootRouter); // local/api/
server.use('/vehicle', vehicleRouter_1.default); // local/api/vehicle  --> vehicleRouter.ts
exports.default = server;
//# sourceMappingURL=index.js.map