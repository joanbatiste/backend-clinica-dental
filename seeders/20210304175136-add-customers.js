'use strict';

let customers = [
  {
    nombre: "Manolo",
    apellido1: "Garcia",
    apellido2: "Fernandez",
    dni: "53200164Z",
    telefono: "666555555",
    email:"manolo@garcia.com",
    password:"1234",
  },
  
]
customers = customers.map((customer) => 
  ({...customer,updatedAt: new Date, createdAt: new Date}));



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Customers", customers);
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
