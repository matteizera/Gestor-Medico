const Sequelize = require('sequelize')
const dbConfig = require('./config')

const Doctor = require('../models/doctors')
const Patient = require('../models/patients')
const Appointment = require('../models/appointments')

const connection = new Sequelize(dbConfig)

/* initialize()
async function initialize(){
  await connection.query('CREATE DATABASE api_consultorio;');
}

usar 1 vez para o docker
*/

Doctor.init(connection)
Patient.init(connection)
Appointment.init(connection)

Patient.associate(connection.models)
Doctor.associate(connection.models)

module.exports = connection
