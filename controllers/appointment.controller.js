//requerimos el modelo appointment

const {Appointment} = require("../models");

class AppointmentController{
    constructor(){

    }

    //Traer todas las citas
    async indexAll(){
        return Appointment.findAll();
    };

    //Traer una cita por id
    async indexOne(id){
        return Appointment.findOne({where:{id}});
    };

    //Crear una cita
    async createOne(appointment){
        return Appointment.create(appointment);
    };

};

let appointmentController = new AppointmentController();

module.exports = appointmentController;