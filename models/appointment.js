'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Customer, {
        as: "customers",
        foreignKey: "customerId"
      });
      this.belongsTo(models.Dentist, {
        as:"dentists",
        foreignKey: "dentistId"
      });

      
    };
  };
  Appointment.init({
    customerId: DataTypes.INTEGER,
    dentistId: DataTypes.INTEGER,
    appointmentDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};