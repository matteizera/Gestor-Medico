const Sequelize = require('sequelize')
const dbConfig = require('./config')

const Patient = require('../models/patients')
const Doctor = require('../models/doctors')
const Appointment = require('../models/appointments')

const connection = new Sequelize(dbConfig)

Patient.init(connection)
Doctor.init(connection)
Appointment.init(connection)

Patient.associate(connection.models)
Doctor.associate(connection.models)


module.exports = connection
