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
exports.createTables1666890652947 = void 0;
class createTables1666890652947 {
    constructor() {
        this.name = 'createTables1666890652947';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."veicule_type_enum" AS ENUM('car', 'mortorcycle')`);
            yield queryRunner.query(`CREATE TABLE "veicule" ("id" SERIAL NOT NULL, "title" character varying(256) NOT NULL, "description" character varying(256) NOT NULL, "km" integer NOT NULL, "year" integer NOT NULL, "value" integer NOT NULL, "type" "public"."veicule_type_enum" NOT NULL DEFAULT 'car', "status" boolean NOT NULL, "date_public" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d70e2974bba8a05cf8d156c4403" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "veicule"`);
            yield queryRunner.query(`DROP TYPE "public"."veicule_type_enum"`);
        });
    }
}
exports.createTables1666890652947 = createTables1666890652947;
