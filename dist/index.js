"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./src/server/index"));
dotenv_1.default.config();
const port = process.env.PORT || 3001;
//Run server
index_1.default.listen(port, () => {
    console.log(`[SERVER ON]: Runnin on port ${port}`);
});
//Server error?
index_1.default.on('error', (error) => {
    console.log(`[SERVER ERROR]: ${error}`);
});
//# sourceMappingURL=index.js.map