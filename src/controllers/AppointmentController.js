const Appointment = require('../models/appointments')

module.exports = {
  async newAppointment(req, res) {
    const { doctorId, patientId, appointmentDate, description } = req.body
    if (!doctorId || !patientId || !appointmentDate || !description) {
      res
        .status(400)
        .json({
          msg: 'Dados obrigatórios não foram preenchidos.',
        })
    }
    const isAppointmentNew = await Appointment.findOne({
      where: { doctorId, patientId },
    })
    if (isAppointmentNew) { res.status(403).json({ msg: 'Consulta já foi cadastrado' }) } else {
      const appointment = await Appointment.create({
        doctorId,
        patientId,
        appointmentDate,
        description,
      }).catch((error) => {
        console.log(error)
      })
      if (appointment) { res.status(201).json({ msg: 'Nova consulta foi adicionado' }) } else {
        res
          .status(404)
          .json({ msg: 'Não foi possível cadastrar nova consulta' })
      }
    }
  },

  async deleteAppointment(req, res) {
    const appointmentId = req.params.id
    const deletedAppointment = await Appointment.destroy({
      where: { id: appointmentId },
    })
    if (deletedAppointment !== 0) { res.status(200).json({ msg: 'Consulta excluída com sucesso' }) } else { res.status(404).json({ msg: 'Consulta não encotrada' }) }
  },

  async searchAppointmentByPatientId(req, res) {
    const id = Number(req.params.id)
    const patient = await Appointment.findAll({
      where: { patientId: id },
    })
    if (!patient) {
      res.status(404).json({ msg: 'Paciente não encontrado' })
    } else {
      res.status(200).json(patient)
    }
  },

  async searchAppointmentByPhysicianId(req, res) {
    const id = Number(req.params.id)
    const patient = await Appointment.findAll({
      where: { doctorId: id },
    })
    if (!patient) {
      res.status(404).json({ msg: 'Paciente não encontrado' })
    } else {
      res.status(200).json(patient)
    }
  },
}
