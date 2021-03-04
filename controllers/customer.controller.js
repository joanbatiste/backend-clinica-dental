const {Customer} = require("../models");

class CustomerController {

    constructor(){

    }

    //Traer todos los clientes
    async showAll(){
        return Customer.findAll();
    }

    //Trae un solo cliente por ID
    async showOne(id){
        return Customer.findOne({where:{id}});
    }

    //Crear clientes
    async createCustomer(customer){
        return Customer.create(customer);

    }

}

let customerController = new CustomerController();

module.exports = customerController;