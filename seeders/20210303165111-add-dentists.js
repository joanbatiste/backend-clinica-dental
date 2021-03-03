'use strict';
let dentists = [
  {
    firstName: "Pepe",
    lastName: "Garcia",
    specialty: "ortodoncista"
  },
  {
    firstName: "Manolo",
    lastName: "Cabezabolo",
    specialty: "maxilofacial"
  },
  {
    firstName: "Benito",
    lastName: "Camelas",
    specialty: "matasanos"
  }
  
]
dentists = dentists.map((dentist) => 
  ({...dentist,updatedAt: new Date, createdAt: new Date}))



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dentists', dentists);
    
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
