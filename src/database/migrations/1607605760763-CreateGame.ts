import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateGame1607605760763 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'publisher',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'name',
            type: 'varchar(50)',
            isNullable: false,
            isUnique: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'genre',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'name',
            type: 'varchar(50)',
            isNullable: false,
            isUnique: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'game',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'id_publisher',
            type: 'integer',
            isNullable: false,
          },

          {
            name: 'id_genre',
            type: 'integer',
            isNullable: false,
          },

          {
            name: 'title',
            type: 'varchar(50)',
            isNullable: false,
          },

          {
            name: 'description',
            type: 'varchar(500)',
            isNullable: true,
          },

          {
            name: 'picture',
            type: 'varchar(500)',
            isNullable: true,
          },

          {
            name: 'metacritic_score',
            type: 'float',
            isNullable: false,
          },

          {
            name: 'release_date',
            type: 'date',
            isNullable: false,
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_publisher'],
            referencedTableName: 'publisher',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
          }),

          new TableForeignKey({
            columnNames: ['id_genre'],
            referencedTableName: 'genre',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('game');
    await queryRunner.dropTable('publisher');
    await queryRunner.dropTable('genre');
  }
}
