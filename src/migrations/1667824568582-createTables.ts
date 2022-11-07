import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1667824568582 implements MigrationInterface {
    name = 'createTables1667824568582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_info" ("id" SERIAL NOT NULL, "CPF" integer, "telephone" integer, "birthday" integer, "CEP" integer, "address" integer, "num" integer, "complement" character varying, "descriptions" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "veicule" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "veicule" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_info" DROP CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949"`);
        await queryRunner.query(`ALTER TABLE "veicule" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "veicule" ADD "description" character varying(256) NOT NULL`);
        await queryRunner.query(`DROP TABLE "user_info"`);
    }

}
