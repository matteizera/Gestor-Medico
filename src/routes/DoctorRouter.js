const express = require('express')
const { DoctorController } = require('../controllers')

const DoctorRouter = express.Router()

DoctorRouter.get('/', DoctorController.listAllDoctor)
DoctorRouter.post('/', DoctorController.newDoctor)
DoctorRouter.put('/:id', DoctorController.updateDoctor)
DoctorRouter.delete('/:id', DoctorController.deleteDoctor)

module.exports = DoctorRouter
