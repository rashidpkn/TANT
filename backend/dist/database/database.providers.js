"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Transactions_model_1 = require("../model/Transactions.model");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'tant',
                define: {
                    timestamps: true,
                },
                logging: false
            });
            sequelize.addModels([Transactions_model_1.Transactions]);
            try {
                await sequelize.authenticate();
                console.log('Database connection has been established successfully.');
            }
            catch (error) {
                console.log('Unable to connect to the database: ', error.message);
                throw new Error('Error on database');
            }
            await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map