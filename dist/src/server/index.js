"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Seguridad
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
// Root routes
const routes_1 = __importDefault(require("../routes"));
const server = (0, express_1.default)();
//Seguridad 
//const DIRECTORIO_PERMITIDO_CORS = process.env.CORS || "http://localhost:3000";
server.use((0, helmet_1.default)());
server.use((0, cors_1.default)({
//origin: DIRECTORIO_PERMITIDO_CORS
}));
//Content type config
server.use(express_1.default.urlencoded({
    extended: true,
    limit: '50mb'
}));
server.use(express_1.default.json({ limit: '50mb' }));
// de aqui la ruta locaslhost:3000/api/....
server.use('/api', routes_1.default);
server.use(express_1.default.static('public'));
// FireStore connect
const firebase_config_1 = require("../../db/firebase_config");
console.log(firebase_config_1.db);
//Redireccionar locahost:3000 --> localhost:3000/api
server.get('/', (req, res) => {
    res.redirect('/api');
});
exports.default = server;
//# sourceMappingURL=index.js.map