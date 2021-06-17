const express = require('express')
const { AppointmentController } = require('../controllers')

const AppointmentRouter = express.Router()

AppointmentRouter.get('/searchAppointmentByPatientId/:id', AppointmentController.searchAppointmentByPatientId)
AppointmentRouter.get('/searchAppointmentByPhysicianId/:id', AppointmentController.searchAppointmentByPhysicianId)
AppointmentRouter.post('/newAppointment', AppointmentController.newAppointment)
AppointmentRouter.delete('/deleteAppointment/:id', AppointmentController.deleteAppointment)

module.exports = AppointmentRouter
