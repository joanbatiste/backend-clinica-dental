//Requerimos el metodo router de express y enrutador de citas

const router = require("express").Router();
const appointmentRouter = require("./appointment.router");

//Requerimos el enrutador de dentistas

const dentistController = require("../controllers/dentist.controller");

//Recursos anidados de dentistas

router.use("/:id/appointments", appointmentRouter);

// EndPoints de dentistas

router.get("/", async (req, res)=>{
    try{

        res.json(await dentistController.indexAll());

    }catch(error){
        res.status(500).json({
            message: "Error"
        })

    }
});



module.exports = router;

