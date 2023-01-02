import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateWithTechProjectPivot1672619857112 implements MigrationInterface {
    name = 'UpdateWithTechProjectPivot1672619857112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" character varying(360) NOT NULL, "estimated_time" double precision NOT NULL, "start_date" date NOT NULL, "end_date" date, "repository" character varying(120) NOT NULL, "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "technologies" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "PK_9a97465b79568f00becacdd4e4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "technologies_projects" ("id" SERIAL NOT NULL, "added_in" date NOT NULL, "projectId" integer, "technologyId" integer, CONSTRAINT "PK_164a9938db2b09b05c2ff645d27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_361a53ae58ef7034adc3c06f09f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "technologies_projects" ADD CONSTRAINT "FK_09838dbb8a286e5d2d5d296e031" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "technologies_projects" ADD CONSTRAINT "FK_ca49fbfd4655d593482d45a72fe" FOREIGN KEY ("technologyId") REFERENCES "technologies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "technologies_projects" DROP CONSTRAINT "FK_ca49fbfd4655d593482d45a72fe"`);
        await queryRunner.query(`ALTER TABLE "technologies_projects" DROP CONSTRAINT "FK_09838dbb8a286e5d2d5d296e031"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_361a53ae58ef7034adc3c06f09f"`);
        await queryRunner.query(`DROP TABLE "technologies_projects"`);
        await queryRunner.query(`DROP TABLE "technologies"`);
        await queryRunner.query(`DROP TABLE "projects"`);
    }

}
