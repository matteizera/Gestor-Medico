const express = require('express')
const AuthRouter = require('./AuthRouter')
const DoctorRouter = require('./DoctorRouter')
const PatientRouter = require('./PatientRouter')
const AppointmentRouter = require('./AppointmentRouter')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("It's working")
})

router.use(AuthRouter)
router.use('/doctors', DoctorRouter)
router.use('/patients', PatientRouter)
router.use('/appointments', AppointmentRouter)

module.exports = router
