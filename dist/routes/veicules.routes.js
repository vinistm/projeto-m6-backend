"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.veiculeRoutes = void 0;
const express_1 = require("express");
const schemaValidation_1 = __importDefault(require("../middlewares/schemaValidation"));
const createVeicule_controller_1 = __importDefault(require("../controllers/veicules/createVeicule.controller"));
const listVeicule_controller_1 = __importDefault(require("../controllers/veicules/listVeicule.controller"));
const veicule_schema_1 = __importDefault(require("../schemas/veicules/veicule.schema"));
const routes = (0, express_1.Router)();
const veiculeRoutes = () => {
    routes.get("", listVeicule_controller_1.default);
    routes.post("", (0, schemaValidation_1.default)(veicule_schema_1.default), createVeicule_controller_1.default);
    return routes;
};
exports.veiculeRoutes = veiculeRoutes;
