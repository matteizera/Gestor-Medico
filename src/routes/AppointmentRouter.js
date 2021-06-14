const express = require('express')
const AppointmentRouter = express.Router()
const AppointmentController = require('../controllers/AppointmentController')

AppointmentRouter.post('/newAppointment', AppointmentController.newAppointment)

AppointmentRouter.delete('/deleteAppointment/:id', AppointmentController.deleteAppointment)

AppointmentRouter.get('/searchAppointmentByPatientId/:id', AppointmentController.searchAppointmentByPatientId)

AppointmentRouter.get('/searchAppointmentByPhysicianId/:id', AppointmentController.searchAppointmentByPhysicianId)

module.exports = AppointmentRouter
