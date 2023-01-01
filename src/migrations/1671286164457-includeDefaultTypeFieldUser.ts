import { MigrationInterface, QueryRunner } from "typeorm";

export class includeDefaultTypeFieldUser1671286164457 implements MigrationInterface {
    name = 'includeDefaultTypeFieldUser1671286164457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "type" SET DEFAULT 'Fullstack'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "type" DROP DEFAULT`);
    }

}
