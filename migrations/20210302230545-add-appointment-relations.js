'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return[queryInterface.addColumn('Appointments',"customerId", {
      type: Sequelize.INTEGER,
      references:{
        model: "Customers",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    }),
    queryInterface.addColumn('Appointments',"dentistId", {
      type: Sequelize.INTEGER,
      references:{
        model: "Dentists",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
      })
    ];

  },

  down: async (queryInterface, Sequelize) => {
    return[ queryInterface.removeColumn("Appointments","customerId"),
    queryInterface.removeColumn("Appointments","dentistId")];
  }
};
