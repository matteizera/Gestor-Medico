const express = require('express')
const { AppointmentController } = require('../controllers')

const AppointmentRouter = express.Router()

AppointmentRouter.get('/search/patient/:id', AppointmentController.searchAppointmentByPatientId)
AppointmentRouter.get('/search/doctor/:id', AppointmentController.searchAppointmentByDoctorId)
AppointmentRouter.post('/', AppointmentController.saveNewAppointment)
AppointmentRouter.delete('/:id', AppointmentController.deleteAppointment)

module.exports = AppointmentRouter
