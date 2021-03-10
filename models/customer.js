'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        
    };
    Customer.init({
        nombre: DataTypes.STRING,
        apellido1: DataTypes.STRING,
        apellido2: DataTypes.STRING,
        dni: DataTypes.STRING,
        telefono: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Customer',
    });
    return Customer;
};