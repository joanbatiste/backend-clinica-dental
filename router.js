const router = require('express').Router();
const dentistRouter = require('./routes/dentist.router');
// //const cityRouter = require('./routes/city.router');
// //
// //
// //// REST RESOURCES
// //
router.use('/dentists',dentistRouter);
// //router.use('/??',cityRouter);

module.exports = router;