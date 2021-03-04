'use strict';
let appointments = [
  {
    customerId: 1,
    dentistId: 2
  },
  {
    customerId: 2,
    dentistId: 5
  },
  {
    customerId: 3,
    dentistId: 1
  }
]
appointments = appointments.map((appointment) => 
  ({...appointment,updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Appointments', appointments);
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
