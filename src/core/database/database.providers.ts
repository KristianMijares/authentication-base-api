import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, PRODUCTION } from '../constants';
import { databaseConfiguration } from './database.config';

const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfiguration.development;
          break;
        case PRODUCTION:
          config = databaseConfiguration.production;
          break;
        default:
          config = databaseConfiguration.development;
      }

      const sequelize = new Sequelize(config);
      sequelize.addModels([__dirname + '/../../**/entities/*.entity.{js,ts}']);
      await sequelize.sync();
      return sequelize;
    },
  },
];

export default databaseProviders;
