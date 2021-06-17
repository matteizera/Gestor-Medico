const express = require('express')
const { PatientController } = require('../controllers')

const PatientRouter = express.Router()

PatientRouter.get('/listAllPatients', PatientController.ListAllPatients)
PatientRouter.get('/searchPatientByName/:name', PatientController.searchPatientByName)
PatientRouter.get('/searchPatientByPhysicianId/:id', PatientController.searchPatientByPhysicianId)
PatientRouter.post('/newPatient', PatientController.newPatient)
PatientRouter.put('/updatePatient/:id', PatientController.updatePatient)

module.exports = PatientRouter
