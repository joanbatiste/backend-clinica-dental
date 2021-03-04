const router = require('express').Router();
const dentistRouter = require('./routes/dentist.router');
const appointmentRouter = require('./routes/appointment.router');
// //
// //
// //// REST RESOURCES
// //
router.use('/dentists',dentistRouter);
router.use('/appointments',appointmentRouter);

module.exports = router;