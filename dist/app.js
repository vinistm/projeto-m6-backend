"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const routes_1 = require("./routes");
const handleError_1 = __importDefault(require("./middlewares/handleError"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.appRoutes)(app);
app.use(handleError_1.default);
exports.default = app;
