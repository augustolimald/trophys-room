import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateInnerTableBetweenGameAndUser1607623625432 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_wish_game',

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
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_user'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }),

          new TableForeignKey({
            columnNames: ['id_game'],
            referencedTableName: 'game',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'user_played_game',

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
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_user'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }),

          new TableForeignKey({
            columnNames: ['id_game'],
            referencedTableName: 'game',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_wish_game');
    await queryRunner.dropTable('user_played_game');
  }
}
