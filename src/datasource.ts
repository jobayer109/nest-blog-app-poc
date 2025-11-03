import { DataSource } from 'typeorm';
import { ormconfig } from './ormconfig';

export const AppDataSource = new DataSource({
  ...ormconfig,
  entities: [__dirname + '/**/*.entity{.ts,.js}'], 
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
});
