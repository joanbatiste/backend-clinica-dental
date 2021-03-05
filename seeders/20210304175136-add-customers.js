'use strict';

let customers = [
  {
    firstName: "Manolo",
    lastName: "Garcia",
    phone: "666555555",
    email:"manolo@garcia.com",
    password:"1234",
  },
  {
    firstName: "Enrique",
    lastName: "Bumbury",
    phone: "666666666",
    email:"enrique@bumbury.com",
    password:"1234",
  },
  {
    firstName: "Santi",
    lastName: "Balmes",
    phone: "666777777",
    email:"santi@balmes.com",
    password:"1234",
  }
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
