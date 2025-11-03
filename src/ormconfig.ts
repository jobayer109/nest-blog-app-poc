import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';

export const ormconfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '72644',
  database: 'nest-blog',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
