const auth = require("../middleware/auth");
//Requerimos el método router de express y enrutador citas

const router = require("express").Router({mergeParams: true});
const appointmentController = require("../controllers/appointment.controller");


//Endpoints de appointmemnts
//Recuperar todas las citas

router.get("/", async (req, res)=>{
    try{
        const customerId = req.params.id;
        if(!customerId){
            res.json(await appointmentController.indexAll());
        }else{
            res.json(await appointmentController.indexAllByCustomerId(customerId));
        }
        
    }catch(error){
        res.status(500).json({
            message: "Server error"
        });
    };
});
//Recuperar una cita por id
router.get("/:aid",auth, async (req,res)=>{
    try{
        const customerId = req.params.id;
        if(!customerId){
            res.json(await appointmentController.indexOne(req.params.aid));
        }else{
            res.json(await appointmentController.indexOneByCustomer(customerId,req.params.aid));
        }
        
    }catch(error){
        res.status(500).json({
            message: "Server error"
        });
    };
});


//Crear una cita nueva
router.post("/", auth, async (req, res)=>{
    try{
        const {appointmentDate, customerId, dentistId} = req.body;
        const appointment = await appointmentController.createOne({appointmentDate,customerId, dentistId});
        res.json(appointment);
    }catch(error){
        return res.status(500).json({
            message: "Server error"
        });
    };
});

//Eliminar una cita
router.delete("/:aid", auth, async (req,res)=>{
    try{
        res.json(await appointmentController.deleteAppointment(req.params.aid));
    }catch(error){
        return res.status(500).json({
            message: "Server error"
        });
    };

});



module.exports = router;