//Requerimnos el modelo customer
const {Clinic} = require("../models");



class ClinicController {

    constructor(){

    }

    //Login de administrador
    async login(email, password){
        const clinicEmail = await Clinic.findOne({where:{email}})
        const clinicPassword = await Clinic.findOne({where:{password}})
        
        if(!clinicEmail === clinicPassword){
            return {error: "Email o contraseña incorrectos"};
        }else{
            return clinicEmail;
        }  
    };   

};

let clinicController = new ClinicController();

module.exports = clinicController;