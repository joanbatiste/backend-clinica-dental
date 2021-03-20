//Requerimos el router
const router = require ("express").Router();

//Requerimos el controlador de clinic
const clinicController = require("../controllers/clinic.controller");

//End point para logearse
router.post("/", async (req,res)=>{
    try{
        const {email,password} = req.body;
        
        const dataClinic = await clinicController.login(email,password);
        
        res.json({dataClinic})
    }catch(error){
        
        return res.status(401).json({
            message: error.message
        });
    };
});

module.exports = router;