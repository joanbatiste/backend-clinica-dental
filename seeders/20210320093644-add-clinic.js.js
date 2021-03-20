'use strict';
let clinic = [
  {
    name: "Cuqui Dent, S.L",
    adress: "C/ Sonrisa de Ochando, 8",
    phone: "963687528",
    email:"info@cuquident.es",
    password:"1234"
  }, 
]
clinic = clinic.map((clinica) => 
  ({...clinica,updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Clinics", clinic);
  },

  down: async (queryInterface, Sequelize) => {

  },

 
};
