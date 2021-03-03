//Requerimos el modelo Dentist

const {Dentist} = require("../models");

class DentistController {
    constructor() {

    }
    
    async indexAll(){
        return Dentist.findAll();
    }

    


}

let dentistController = new DentistController();

module.exports = dentistController;