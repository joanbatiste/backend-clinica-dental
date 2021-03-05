//Requerimos el modelo Dentist

const {Dentist} = require("../models");

class DentistController {
    constructor() {

    }
    //Traer todos los dentistas
    async indexAll(){
        return Dentist.findAll();
    };
    //Traer un dentista
    async indexOne(id){
        return Dentist.findOne({where:{id}});
    };
    //Dar de alta un dentista
    async createOne(dentist){
        return Dentist.create(dentist);
    };
    //Actualizar datos de un dentista
    async updateDentist(id, dentist) {    
        console.log(id, dentist);
        return Dentist.update(dentist,{where:{id}},{new: true});
        
    };
    //Eliminar un dentista
    async destroyDent(id){
        return Dentist.destroy({where:{id:id}});
    };
    


};

let dentistController = new DentistController();

module.exports = dentistController;