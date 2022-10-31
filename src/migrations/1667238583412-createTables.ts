import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1667238583412 implements MigrationInterface {
    name = 'createTables1667238583412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "purcharser" boolean NOT NULL, "seller" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "veicule" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "veicule" ADD CONSTRAINT "FK_ba9e213d37ea4ff85198448c47f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "veicule" DROP CONSTRAINT "FK_ba9e213d37ea4ff85198448c47f"`);
        await queryRunner.query(`ALTER TABLE "veicule" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
