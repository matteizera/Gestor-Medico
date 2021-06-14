const express = require('express')
const PatientRouter = express.Router()
const PatientController = require('../controllers/PatientController')

PatientRouter.get('/listAllPatients', PatientController.ListAllPatients)

PatientRouter.put('/updatePatient/:id', PatientController.updatePatient)

PatientRouter.get('/searchPatientByPhysicianId/:id', PatientController.searchPatientByPhysicianId)

PatientRouter.post('/newPatient', PatientController.newPatient)
PatientRouter.get('/searchPatientByName/:name', PatientController.searchPatientByName)
//PatientRouter.get('/searchPatientByPhysicianId/:id', PatientController.searchPatientByPhysicianId)

module.exports = PatientRouter
