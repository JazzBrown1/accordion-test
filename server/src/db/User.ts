import { Model, DataTypes } from 'sequelize';

import sequelize from './sequelize';

class User extends Model {}

User.init({
  firstname: DataTypes.STRING,
  surname: DataTypes.STRING,
  email: DataTypes.STRING,
  dob: DataTypes.DATE,
  gender: DataTypes.STRING,
  comments: DataTypes.STRING,
  telephone: DataTypes.STRING,
}, { sequelize, modelName: 'user' });

export default User;
