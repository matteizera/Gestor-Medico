const { Op } = require('sequelize')
const Doctor = require('../models/doctors')
const Patient = require('../models/patients')

async function ListAllPatients(req, res) {
  const patients = await Patient.findAll({
    as: 'patients',
    order: [['name', 'ASC']],
  })

  res
    .status(200)
    .json(patients)
}

async function searchPatientByName(req, res) {
  const { name } = req.params
  const patients = await Patient.findAll({
    where: {
      name: {
        [Op.substring]: name,
      },
    },
  })

  res
    .status(200)
    .json(patients)
}

async function searchPatientByDoctorId(req, res) {
  const doctorId = Number(req.params.id)
  const patients = await Patient.findAll({
    include: [
      {
        model: Doctor,
        as: 'doctors',
        where: { id: doctorId },
        through: { attributes: [] },
      },
    ],
  })

  res
    .status(200)
    .json(patients)
}

async function saveNewPatient(req, res) {
  const { name, email, phone } = req.body

  if (!name || !email || !phone) {
    return res
      .status(422)
      .json({ msg: 'Dados obrigatórios não preenchidos.' })
  }

  try {
    const newPatient = await Patient.create({
      phone,
      email,
      name,
    })

    return res
      .status(201)
      .json(newPatient)
  } catch (error) {
    console.warn(error)

    return res.status(500).send()
  }
}

async function updatePatient(req, res) {
  const { name, email, phone } = req.body
  const patientId = Number(req.params.id) || 0
  const oldPatient = await Patient.findByPk(patientId)

  if (!oldPatient) {
    return res
      .status(404)
      .json({ msg: `Paciente com ID '${req.params.id}' não encontrado.` })
  }

  try {
    await Patient.update({
      phone: phone || oldPatient.phone,
      email: email || oldPatient.email,
      name: name || oldPatient.name,
    }, {
      where: { id: patientId },
    })

    return res
      .status(200)
      .send()
  } catch (error) {
    console.warn(error)

    return res.status(500).send()
  }
}

module.exports = {
  ListAllPatients,
  searchPatientByName,
  searchPatientByDoctorId,
  saveNewPatient,
  updatePatient,
}
