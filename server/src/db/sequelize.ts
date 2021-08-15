import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'database',
  process.env.DB_USER || 'user',
  process.env.DB_PASSWORD || 'password', {
  // sqlite! now!
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || ':memory:',
  },
);

export default sequelize;
