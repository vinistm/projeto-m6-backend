import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1667825132314 implements MigrationInterface {
    name = 'createTables1667825132314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_info" ("id" SERIAL NOT NULL, "CPF" integer, "telephone" integer, "birthday" integer, "CEP" integer, "address" integer, "num" integer, "complement" character varying, "descriptions" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "purcharser" boolean NOT NULL, "seller" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."veicule_type_enum" AS ENUM('car', 'mortorcycle')`);
        await queryRunner.query(`CREATE TABLE "veicule" ("id" SERIAL NOT NULL, "title" character varying(256) NOT NULL, "description" character varying NOT NULL, "km" integer NOT NULL, "year" integer NOT NULL, "value" integer NOT NULL, "type" "public"."veicule_type_enum" NOT NULL DEFAULT 'car', "status" boolean NOT NULL, "date_public" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_d70e2974bba8a05cf8d156c4403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "veicule" ADD CONSTRAINT "FK_ba9e213d37ea4ff85198448c47f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "veicule" DROP CONSTRAINT "FK_ba9e213d37ea4ff85198448c47f"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949"`);
        await queryRunner.query(`DROP TABLE "veicule"`);
        await queryRunner.query(`DROP TYPE "public"."veicule_type_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_info"`);
    }

}
