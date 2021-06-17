const express = require('express')
const { PhysicianController } = require('../controllers')

const PhysicianRouter = express.Router()

PhysicianRouter.get('/', PhysicianController.listAllPhysician)
PhysicianRouter.post('/', PhysicianController.newPhysician)
PhysicianRouter.put('/:id', PhysicianController.updatePhysician)
PhysicianRouter.delete('/:id', PhysicianController.deletePhysician)

module.exports = PhysicianRouter
