//Requerimnos el modelo customer
const {Customer} = require("../models");

//Importacion librerías para hash de password y token
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "unapalabrasecreta";

class CustomerController {

    constructor(){

    }

    //Traer todos los clientes
    async showAll(){
        return Customer.findAll();
    };

    //Trae un solo cliente por ID
    async showOne(id){
        return Customer.findOne({where:{id}});
    };

    //Crear clientes
    async createCustomer(customer){
        customer.password = await bcrypt.hash(customer.password, 5)
        return Customer.create(customer);
        

    };

    //Login de usuario
    async login(email, password){
        const customer = await Customer.findOne({where:{email}})
        if(!customer){
            throw new Error("Email does not exist")
        }
        if (!await bcrypt.compare(password,customer.password)){
            throw new Error('Password incorrect')
        }
        const payload = {
            customerId: customer.id,
            tokenCreationDate: new Date,
        }

        return jwt.sign(payload, secret);
    };   

};

let customerController = new CustomerController();

module.exports = customerController;