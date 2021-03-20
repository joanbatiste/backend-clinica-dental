'use strict';
let clinic = [
  {
    nombre: "Admin",
    adress: "C/ Sonrisa de Ochando, 8",
    phone: "963687528",
    email:"info@cuquident.es",
    password:"Abril2021!"
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
