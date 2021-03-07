const router = require('express').Router();
const dentistRouter = require('./routes/dentist.router');
const appointmentRouter = require('./routes/appointment.router');

const customerRouter = require('./routes/customer.router');

// REST RESOURCES


router.use('/dentists',dentistRouter);
// router.use('/appointments',appointmentRouter);
router.use('/customers',customerRouter);

module.exports = router;