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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veicule = exports.VeiculeType = void 0;
const typeorm_1 = require("typeorm");
var VeiculeType;
(function (VeiculeType) {
    VeiculeType["CAR"] = "car";
    VeiculeType["MOTORCYCLE"] = "mortorcycle";
})(VeiculeType = exports.VeiculeType || (exports.VeiculeType = {}));
let Veicule = class Veicule {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Veicule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Veicule.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Veicule.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Veicule.prototype, "km", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Veicule.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Veicule.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-enum", enum: VeiculeType, default: VeiculeType.CAR }),
    __metadata("design:type", String)
], Veicule.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Veicule.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Veicule.prototype, "date_public", void 0);
Veicule = __decorate([
    (0, typeorm_1.Entity)("veicule")
], Veicule);
exports.Veicule = Veicule;
