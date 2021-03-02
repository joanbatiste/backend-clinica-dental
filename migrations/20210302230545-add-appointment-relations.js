'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Appointments',"customerId", {
      type: Sequelize.INTEGER,
      references:{
        model: "Customers",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    });
    await queryInterface.addColumn('Appointments',"dentistId", {
      type: Sequelize.INTEGER,
      references:{
        model: "Dentists",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
      });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Appointments","customerId");
    await queryInterface.removeColumn("Appointments","dentistId");
  }
};
