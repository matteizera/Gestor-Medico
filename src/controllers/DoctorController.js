const Doctor = require('../models/doctors')

async function newDoctor(req, res) {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res
      .status(422)
      .json({ msg: 'Dados obrigatórios não preenchidos.' })
  }

  try {
    const doctor = await Doctor.create({
      name,
      email,
      password,
    })

    return res
      .status(201)
      .json(doctor)
  } catch (error) {
    console.warn(error)

    return res.status(500).send()
  }
}

async function listAllDoctor(req, res) {
  const doctors = await Doctor.findAll({
    as: 'doctors',
    order: [['name', 'ASC']],
  })

  res
    .status(200)
    .json(doctors)
}

async function updateDoctor(req, res) {
  const { name, email, password } = req.body
  const doctorId = Number(req.params.id) || 0
  const oldDoctor = await Doctor.findByPk(doctorId)

  if (!oldDoctor) {
    return res
      .status(404)
      .json({ msg: `Médico com ID '${req.params.id}' não encontrado.` })
  }

  try {
    await Doctor.update({
      password: password || oldDoctor.password,
      email: email || oldDoctor.email,
      name: name || oldDoctor.name,
    }, {
      where: { id: doctorId },
    })

    return res
      .status(200)
      .send()
  } catch (error) {
    console.warn(error)

    return res.status(500).send()
  }
}

async function deleteDoctor(req, res) {
  const doctorId = Number(req.params.id) || 0
  const deletedDoctorsCount = await Doctor.destroy({
    where: { id: doctorId },
  })

  if (!deletedDoctorsCount) {
    res
      .status(404)
      .json({ msg: `Médico com ID ${req.params.id} não encotrado.` })
  } else {
    res
      .status(200)
      .json({ msg: 'Médico excluído com sucesso.' })
  }
}

module.exports = {
  newDoctor,
  listAllDoctor,
  updateDoctor,
  deleteDoctor,
}
