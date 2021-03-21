const router = require('express').Router();
const dentistRouter = require('./routes/dentist.router');
const appointmentRouter = require('./routes/appointment.router');

const customerRouter = require('./routes/customer.router');
const clinicRouter = require('./routes/clinic.router');

// REST RESOURCES


router.use('/dentists',dentistRouter);
router.use('/appointments',appointmentRouter);
router.use('/customers',customerRouter);
router.use('/clinic', clinicRouter);

module.exports = router;