'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentist extends Model {
    
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