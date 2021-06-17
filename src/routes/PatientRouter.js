const express = require('express')
const { PatientController } = require('../controllers')

const PatientRouter = express.Router()

PatientRouter.get('/', PatientController.ListAllPatients)
PatientRouter.get('/search/:name', PatientController.searchPatientByName)
PatientRouter.get('/search/doctor/:id', PatientController.searchPatientByDoctorId)
PatientRouter.post('/', PatientController.saveNewPatient)
PatientRouter.put('/:id', PatientController.updatePatient)

module.exports = PatientRouter
