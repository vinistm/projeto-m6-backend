import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1666878249383 implements MigrationInterface {
    name = 'createTables1666878249383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_info" ("id" SERIAL NOT NULL, "phone" integer, "state" character varying, "city" character varying, "address" character varying, "password" character varying(250) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "email" character varying(250) NOT NULL, "password" character varying(250) NOT NULL, "purchaser" boolean NOT NULL, "seller" boolean NOT NULL, "CPF" integer NOT NULL, "birthday" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."veicule_type_enum" AS ENUM('car', 'mortorcycle')`);
        await queryRunner.query(`CREATE TABLE "veicule" ("id" SERIAL NOT NULL, "title" character varying(256) NOT NULL, "description" character varying(256) NOT NULL, "km" integer NOT NULL, "year" integer NOT NULL, "value" integer NOT NULL, "type" "public"."veicule_type_enum" NOT NULL DEFAULT 'car', "status" boolean NOT NULL, "date_public" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d70e2974bba8a05cf8d156c4403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" DROP CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949"`);
        await queryRunner.query(`DROP TABLE "veicule"`);
        await queryRunner.query(`DROP TYPE "public"."veicule_type_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_info"`);
    }

}
