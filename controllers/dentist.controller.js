//Requerimos el modelo Dentist

const {Dentist} = require("../models");

class DentistController {
    constructor() {

    }
    
    async indexAll(){
        return Dentist.findAll();
    }
    async indexOne(id){
        return Dentist.findById({where:id});
    }

    


}

let dentistController = new DentistController();

module.exports = dentistController;