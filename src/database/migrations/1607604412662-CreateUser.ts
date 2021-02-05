import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { User } from '../../app/entities';

export class CreateUser1607604412662 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',

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
          },

          {
            name: 'email',
            type: 'varchar(100)',
            isNullable: false,
            isUnique: true,
          },

          {
            name: 'password',
            type: 'varchar(500)',
            isNullable: false,
          },

          {
            name: 'profile_picture',
            type: 'varchar(500)',
            isNullable: false,
            default: "'default-user.jpg'",
          },

          {
            name: 'admin',
            type: 'boolean',
            isNullable: false,
            default: false,
          },

          {
            name: 'token',
            type: 'varchar(500)',
            isNullable: true,
          },
        ],
      }),
    );

    await User.create({
      name: 'Administrador',
      email: 'admin@mail.com',
      profile_picture: 'users/default-user.jpg',
      password: '1234',
      admin: true,
    }).save();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
