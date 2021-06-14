const express = require('express')
const PhysicianRouter = express.Router()
const PhysicianController = require('../controllers/PhysicianController')

PhysicianRouter.post('/', PhysicianController.newPhysician)

PhysicianRouter.get('/', PhysicianController.listAllPhysician)

PhysicianRouter.put('/:id', PhysicianController.updatePhysician)

PhysicianRouter.delete('/:id', PhysicianController.deletePhysician)

module.exports = PhysicianRouter
