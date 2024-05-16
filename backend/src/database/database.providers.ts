import { Sequelize } from 'sequelize-typescript';
import { Transactions } from 'src/model/Transactions.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'tant',
        define:{
          timestamps:true,
        },
        logging:false
      });
      sequelize.addModels([Transactions]);
      try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
      } catch (error) {
        console.log('Unable to connect to the database: ', error.message);
        throw new Error('Error on database');
      }
      await sequelize.sync({alter:true});
      return sequelize;
    },
  },
];