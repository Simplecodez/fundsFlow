"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const create_user_controller_1 = require("../controller/create-user.controller");
const registerController = tsyringe_1.container.resolve(create_user_controller_1.RegisterController);
class AuthRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.initialize();
    }
    initialize() {
        this.router.post('/register', registerController.register());
    }
    getRouter() {
        return this.router;
    }
}
const authRouter = new AuthRouter();
exports.default = authRouter.getRouter();
