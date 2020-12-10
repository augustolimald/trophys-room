import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateReview1607606165674 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'review',

        columns: [
          {
            name: 'id_user',
            type: 'integer',
            isNullable: false,
            isPrimary: true,
            isGenerated: false,
          },

          {
            name: 'id_game',
            type: 'integer',
            isNullable: false,
            isPrimary: true,
            isGenerated: false,
          },

          {
            name: 'score',
            type: 'float',
            isNullable: false,
          },

          {
            name: 'comment',
            type: 'varchar(500)',
            isNullable: false,
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_game'],
            referencedTableName: 'game',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }),

          new TableForeignKey({
            columnNames: ['id_user'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('review');
  }
}
