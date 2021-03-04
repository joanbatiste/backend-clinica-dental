//Requerimos el método router de express y enrutador citas

const router = require("express").Router();
const appointmentController = require("../controllers/appointment.controller");

//Endpoints de appointmemnts
//Recuperar todas las citas

router.get("/", async (req, res)=>{
    try{
        res.json(await appointmentController.indexAll());
    }catch(error){
        res.status(500).json({
            message: "Server error"
        });
    };
});
//Recuperar una cita por id
router.get("/:id", async (req,res)=>{
    try{
        res.json(await appointmentController.indexOne(req.params.id));
    }catch(error){
        res.status(500).json({
            message: "Server error"
        });
    };
});
//Crear una cita nueva
router.post("/", async (req, res)=>{
    try{
        const {appointmentDate, customerId, dentistId} = req.body;
        const appointment = await appointmentController.createOne(appointmentDate,customerId, dentistId);
        res.json(appointment);
    }catch(error){
        return res.status(500).json({
            message: "Server error"
        });
    };
});

module.exports = router;