"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.RegisterController = void 0;
const tsyringe_1 = require("tsyringe");
const catch_async_utils_1 = require("../../utils/general/catch-async.utils");
const user_validator_1 = require("../../validator/user.validator");
const validator_1 = __importDefault(require("validator"));
const app_error_utils_1 = require("../../utils/general/app.error.utils");
let RegisterController = class RegisterController {
    constructor(userService) {
        this.userService = userService;
    }
    register() {
        return (0, catch_async_utils_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield user_validator_1.registerValidationSchema.validateAsync(req.body);
            if (!validator_1.default.isMobilePhone(req.body.phoneNumber, 'any'))
                return next(new app_error_utils_1.AppError('Invalid phone number.', 400));
            yield this.userService.createOne(req.body);
            res.status(200).json({
                success: true,
                message: 'Thank you for registering.'
            });
        }));
    }
};
exports.RegisterController = RegisterController;
exports.RegisterController = RegisterController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UserService')),
    __metadata("design:paramtypes", [Object])
], RegisterController);
