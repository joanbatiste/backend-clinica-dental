'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Dentists',"appointmentId", {
      type: Sequelize.INTEGER,
      references:{
        model: "Appointments",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Dentists","appointmentId");
  }
};
