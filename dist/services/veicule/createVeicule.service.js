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
Object.defineProperty(exports, "__esModule", { value: true });
const veicule_entity_1 = require("../../entities/veicule.entity");
const data_source_1 = require("../../data-source");
const errors_1 = require("../../errors");
const createVeiculeService = ({ title, description, km, year, value, type, status }) => __awaiter(void 0, void 0, void 0, function* () {
    const veiculeRepository = data_source_1.AppDataSource.getRepository(veicule_entity_1.Veicule);
    const veicule = yield veiculeRepository.findOneBy({
        title: title,
    });
    if (veicule) {
        throw new errors_1.AppError(400, "Veicule already exists");
    }
    const veiculeCreate = new veicule_entity_1.Veicule();
    veiculeCreate.title = title;
    veiculeCreate.description = description;
    veiculeCreate.km = km;
    veiculeCreate.year = year;
    veiculeCreate.value = value;
    veiculeCreate.type = type;
    veiculeCreate.status = status;
    veiculeRepository.create(veiculeCreate);
    yield veiculeRepository.save(veiculeCreate);
    return veiculeCreate;
});
exports.default = createVeiculeService;
