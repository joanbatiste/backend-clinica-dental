//Requerimos el metodo router de express y enrutador de citas

const router = require("express").Router();
const appointmentRouter = require("./appointment.router");

//Requerimos el enrutador de dentistas

const dentistController = require("../controllers/dentist.controller");




//Recursos anidados de dentistas

router.use("/:id/appointments", appointmentRouter);

// EndPoints de dentistas
//Recuperar todos los dentistas
router.get("/", async (req, res)=>{
    try{

        res.json(await dentistController.indexAll());

    }catch(error){
        res.status(500).json({
            message: "Error"
        });

    };
});

//Buscar un dentista por su id
router.get("/:id", async (req,res)=>{
    try{
        res.json(await dentistController.indexOne(req.params.id));

    }catch(error){
        res.status(500).json({
            message: "Error"
        });

    };
});
//Dar de alta un dentista
router.post("/", async(req, res)=>{
    try{
        const createdDentist = await dentistController.createOne(req.body);
        res.status(200).json(createdDentist);

    }catch(error){
        return res.status(500).json({
            message: "Server error"
        });
    };
});

//Actualizar datos de un dentista
router.put("/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedDentist = await dentistController.updateDentist(id, req.body);
        res.status(200).json(updatedDentist);
        console.log("soy el dentista actualizado",updatedDentist);

    }catch(error){
        return res.status(500).json({
            message: "Server error"
        });

    };
});

//Eliminar un registro de dentista
router.delete("/:id", async(req,res)=>{
    try{
        res.json(await dentistController.destroyDent(req.params.id));
    }catch(error){
        return res.status(500).json({
            message: "Server error"
        });
    };
});

module.exports = router;

