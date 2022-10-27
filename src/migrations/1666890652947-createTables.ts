import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1666890652947 implements MigrationInterface {
    name = 'createTables1666890652947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."veicule_type_enum" AS ENUM('car', 'mortorcycle')`);
        await queryRunner.query(`CREATE TABLE "veicule" ("id" SERIAL NOT NULL, "title" character varying(256) NOT NULL, "description" character varying(256) NOT NULL, "km" integer NOT NULL, "year" integer NOT NULL, "value" integer NOT NULL, "type" "public"."veicule_type_enum" NOT NULL DEFAULT 'car', "status" boolean NOT NULL, "date_public" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d70e2974bba8a05cf8d156c4403" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "veicule"`);
        await queryRunner.query(`DROP TYPE "public"."veicule_type_enum"`);
    }

}
