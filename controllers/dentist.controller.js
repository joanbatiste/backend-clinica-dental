//Requerimos el modelo Dentist

const {Dentist} = require("../models");

//Importacion librerías para hash de password y token
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "unapalabrasecreta";

class DentistController {
    constructor() {

    }
    //Traer todos los dentistas
    async indexAll(){
        return Dentist.findAll();
    }
    //Traer un dentista
    async indexOne(id){
        return Dentist.findOne({where:{id}});
    };
    //Dar de alta un dentista
    async createOne(dentist){
        dentist.password = await bcrypt.hash(dentist.password, 5)
        return Dentist.create(dentist);
    };
    //Login de dentista
    async login(email, password){
        const dentist = await Dentist.findOne({where:{email}})
        if(!dentist){
            throw new Error("Email does not exist")
        }
        if (!await bcrypt.compare(password,dentist.password)){
            throw new Error('Password incorrect')
        }
        const payload = {
            dentistId: dentist.id,
            tokenCreationDate: new Date,
        }

        return jwt.sign(payload, secret);
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