'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models) {
        //     this.hasMany(models.Appointment, {
        //         // as: "appointments",
        //         foreignKey: "appointmentId",
        //         sourceKey: "id"
        //     });
        //     // define association here
        // }
    };
    Customer.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Customer',
    });
    return Customer;
};