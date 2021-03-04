const router = require ("express").Router();

const customerController = require("../controllers/customer.controller");



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
        
        res.json(await customerController.createCustomer(req.body));

    }catch(error){
        res.status(500).json({
            message: "Error server"
        });
    };

});

module.exports = router;