const express = require('express')
const { DoctorController } = require('../controllers')
const { validatePassword } = require('../middlewares')

const DoctorRouter = express.Router()

DoctorRouter.get('/', DoctorController.listAllDoctor)
DoctorRouter.post('/', validatePassword(), DoctorController.saveNewDoctor)
DoctorRouter.put('/:id', validatePassword(true), DoctorController.updateDoctor)
DoctorRouter.delete('/:id', DoctorController.deleteDoctor)

module.exports = DoctorRouter
