"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = __importDefault(require("../configs/dbConfig"));
require("dotenv/config");
require("reflect-metadata");
require("./diregistry/di");
const app_1 = require("./app");
let server;
const mongoDBConnection = new dbConfig_1.default(process.env.MONGODB_CONNECTION_URI);
mongoDBConnection
    .connect()
    .then(() => {
    console.log('Database Connection Established');
    server = app_1.app.listen(8080, () => {
        console.log(`App running on port: ${8080}`);
    });
})
    .catch((e) => console.log(e));
