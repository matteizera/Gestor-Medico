const Appointment = require('../models/appointments')

async function searchAppointmentByPatientId(req, res) {
  const patientId = Number(req.params.id) || 0
  const patients = await Appointment.findAll({
    where: { patientId },
  })

  res
    .status(200)
    .json(patients)
}

async function searchAppointmentByDoctorId(req, res) {
  const doctorId = Number(req.params.id) || 0
  const patients = await Appointment.findAll({
    where: { doctorId },
  })

  res
    .status(200)
    .json(patients)
}

async function saveNewAppointment(req, res) {
  const { doctorId, patientId, appointmentDate, description } = req.body

  if (!doctorId || !patientId || !appointmentDate || !description) {
    return res
      .status(422)
      .json({ msg: 'Dados obrigatórios não preenchidos.' })
  }

  const isAppointmentNew = await Appointment.findOne({
    where: { doctorId, patientId },
  })

  if (isAppointmentNew) {
    return res
      .status(403)
      .json({ msg: 'Consulta já cadastrada.' })
  }

  try {
    const newAppointment = await Appointment.create({
      doctorId,
      patientId,
      appointmentDate,
      description,
    })

    return res
      .status(201)
      .json(newAppointment)
  } catch (error) {
    console.warn(error)

    return res.status(500).send()
  }
}

async function deleteAppointment(req, res) {
  const appointmentId = Number(req.params.id) || 0
  const deletedAppointmentsCount = await Appointment.destroy({
    where: { id: appointmentId },
  })

  if (!deletedAppointmentsCount) {
    res
      .status(404)
      .json({ msg: `Consulta com ID ${req.params.id} não encotrada.` })
  } else {
    res
      .status(200)
      .json({ msg: 'Consulta excluída com sucesso.' })
  }
}

module.exports = {
  searchAppointmentByPatientId,
  searchAppointmentByDoctorId,
  saveNewAppointment,
  deleteAppointment,
}
