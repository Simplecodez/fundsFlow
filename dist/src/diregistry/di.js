"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const user_model_1 = __importDefault(require("../users/model/user.model"));
const create_user_controller_1 = require("../auth/controller/create-user.controller");
const user_service_1 = require("../users/services/user.service");
tsyringe_1.container.register('UserModel', { useValue: user_model_1.default });
tsyringe_1.container.register('RegisterController', { useClass: create_user_controller_1.RegisterController });
tsyringe_1.container.register('UserService', { useClass: user_service_1.UserService });
