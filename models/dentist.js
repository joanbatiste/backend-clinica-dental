'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Appointment, {
        as: "appointments",
        foreignKey: "appointmentId"
    });
    }
  };
  Dentist.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    specialty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dentist',
  });
  return Dentist;
};