/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv/config');

const connection =
  process.env.NODE_ENV === 'test'
    ? {
        type: 'sqlite',
        database: __dirname + '/tests/.tmp/db.test.sqlite',
      }
    : {
        type: 'postgres',
        url: process.env.DATABASE_URL,
      };

const entities = [];
const migrations = [];

if (['production', 'staging'].includes(process.env.NODE_ENV)) {
  entities.push(__dirname + '/build/app/entities/*.js');
  migrations.push(__dirname + '/build/database/migrations/*.js');
} else {
  entities.push(__dirname + '/src/app/entities/*.ts');
  migrations.push(__dirname + '/src/database/migrations/*.ts');
}

module.exports = {
  ...connection,

  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
  migrationsTableName: 'Migrations',

  entities,
  migrations,

  cli: {
    entitiesDir: 'src/app/entities',
    migrationsDir: 'src/database/migrations',
  },
};
