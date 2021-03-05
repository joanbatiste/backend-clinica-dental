const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'unapalabrasecreta';

const auth = async(req, res, next) => {

    try {
        const authorization = req.headers.authorization;
        const token = authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);
        if(!req.params.id){
            next();
        }else if(req.params.id == payload.customerId){
            next();
        }else{
            throw new Error ("Not autorized");
        }
        
    } catch (error) {
        const message = error.message
        res.status(401).json(error.message);
    }
}

module.exports = auth;