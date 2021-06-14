const express = require('express')
const PatientRouter = require('./PatientRouter')
const AppointmentRouter = require('./AppointmentRouter')
const PhysicianRouter = require('./PhysicianRouter')
const router = express.Router()

router.get('/', (req, res) => {
  res.send("It's working")
})

router.use('/patient', PatientRouter)
router.use('/appointment', AppointmentRouter)
router.use('/physicians', PhysicianRouter)

module.exports = router
