'use strict';
let dentists = [
  {
    firstName: "Pepe",
    lastName: "Garcia",
    specialty: "ortodoncista",
    email:"pepe@garcia.com",
    password:"1234"
  },
  {
    firstName: "Manolo",
    lastName: "Cabezabolo",
    specialty: "maxilofacial",
    email:"manolo@cabezabolo.com",
    password:"1234"
  },
  {
    firstName: "Benito",
    lastName: "Camelas",
    specialty: "matasanos",
    email:"benito@camelas.com",
    password:"1234"
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
