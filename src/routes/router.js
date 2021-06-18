const express = require('express')
const AuthRouter = require('./AuthRouter')
const DoctorRouter = require('./DoctorRouter')
const PatientRouter = require('./PatientRouter')
const AppointmentRouter = require('./AppointmentRouter')
const { checkToken } = require('../middlewares')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("It's working")
})

router.use(AuthRouter)
router.use('/doctors', checkToken(), DoctorRouter)
router.use('/patients', checkToken(), PatientRouter)
router.use('/appointments', checkToken(), AppointmentRouter)

module.exports = router
