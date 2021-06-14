const Patients = require('../models/patients')
const Doctors = require('../models/doctors')

module.exports = {
  async ListAllPatients(req, res) {
    const patients = await Patients.findAll({
      as: 'patients',
      order: [['name', 'ASC']],
    }).catch((error) => {
      console.log(error)
    })
    if (patients) {
      res.status(200).json({ patients })
    } else {
      res.status(404).json(
        { msg: 'Não foi possível encotrar pacientes' },
      )
    }
  },

  async searchPatientByPhysicianId(req, res) {
    const doctor = Number(req.params.id)
    const patient = await Patients.findAll({
      include: [
        {
          model: Doctors,
          as: 'doctors',
          where: { id: doctor },
          through: { attributes: [] },
        },
      ],
    })
    if (!patient) {
      res.status(404).json({ msg: 'Paciente não encontrado' })
    } else {
      res.status(200).json(patient)
    }
  },

  async updatePatient(req, res) {
    const patientId = Number(req.params.id)
    const oldPatient = await Patients.findByPk(patientId)
    const { name, email, phone } = req.body
    const newPatient = { id: patientId, name, email, phone }

    if (!oldPatient) {
      res.status(404).json({ msg: `Paciente com ID '${req.params.id}' não encontrado` })
      return
    }

    try {
      Patients.update(newPatient, {
        where: { id: patientId },
      })
      res.status(200).json({ msg: 'paciente alterado com sucesso' })
    } catch (msg) {
      res.status(422).json({ msg })
    }
  },
}
