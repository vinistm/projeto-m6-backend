"use strict";
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
const createVeicule_service_1 = __importDefault(require("../../services/veicule/createVeicule.service"));
const createVeiculeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, km, year, value, type, status } = req.body;
    const createVeicule = yield (0, createVeicule_service_1.default)({
        title,
        description,
        km,
        year,
        value,
        type,
        status
    });
    return res.status(201).json(createVeicule);
});
exports.default = createVeiculeController;
