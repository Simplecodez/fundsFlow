"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const auth_router_1 = __importDefault(require("./auth/router/auth.router"));
const app_error_utils_1 = require("./utils/general/app.error.utils");
const error_controller_1 = __importDefault(require("./error/error.controller"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json({ limit: '10kb' }));
app.use('/api/v1/auth', auth_router_1.default);
app.get('/', (req, res) => {
    res.send(`Welcome to FundsFlow`);
});
app.use('*', (req, res, next) => {
    next(new app_error_utils_1.AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(error_controller_1.default);
