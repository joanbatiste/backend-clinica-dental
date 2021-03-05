const router = require ("express").Router();

const customerController = require("../controllers/customer.controller");

//Recursos anidados de Customers
const appointmentRouter = require("./appointment.router");
router.use("/:id/appointments", appointmentRouter);

//Endpoints de clientes

//GET Traemos todos los clientes

router.get("/", async (req, res) => {
    try{

        res.json(await customerController.showAll());

    }catch(error){
        res.status(500).json({
            message: "Error server"
        });

    };
});

router.get("/:id", async (req, res) => {
    try{

        res.json(await customerController.showOne(req.params.id));

    }catch(error){
        res.status(500).json({
            message: "Error server"
        });
    };
});

router.post("/", async (req, res) => {
    try{
        const customer = await customerController.createCustomer(req.body);
        const status = "Success";
        res.json({status,customer});

    }catch(error){
        res.status(500).json({
            message: "Error server"
        });
    };

});

router.post("/login", async (req,res)=>{
    try{
        const {email,password} = req.body;
        const jwt = await customerController.login(email,password);
        res.json({jwt})
    }catch(error){
        return res.status(401).json({
            message: error.message
        });
    };
});

module.exports = router;