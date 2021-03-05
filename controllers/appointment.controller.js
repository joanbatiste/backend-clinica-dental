//Requerimos operadores de sequelize
const {Op} = require("sequelize");

//requerimos el modelo appointment
const {Appointment} = require("../models");

class AppointmentController{
    constructor(){

    }

    //Traer todas las citas
    async indexAll(){
        return Appointment.findAll();
    };
    //traer todas las citas de un customer
    async indexAllByCustomerId(customerId){
        return Appointment.findAll({where:{customerId,appointmentDate:{[Op.gte]:new Date}}})
    }

    //Traer una cita por id
    async indexOne(id){
        return Appointment.findOne({where:{id}});
    };
    async indexOneByCustomer(customerId, id){
        const appointment = await Appointment.findOne({where:{id}});
        if(appointment.customerId == customerId){
            return appointment;
        }else{
            return {};
        }
    };

    //Crear una cita
    async createOne(appointment){
        return Appointment.create(appointment);
    };
    
    //Eliminar una cita
    async deleteAppointment(id){
        return Appointment.destroy({where:{id}});
    };

};

let appointmentController = new AppointmentController();

module.exports = appointmentController;