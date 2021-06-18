const Doctor = require('../models/doctors')

async function signIn(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    return res
      .status(422)
      .json({ msg: 'Dados obrigatórios não preenchidos.' })
  }

  try {
    const user = await Doctor.findOne({
      where: { email, password },
    })

    if (!user) {
      return res
        .status(401)
        .json({ msg: 'Credenciais inválidas.' })
    }

    return res
      .status(200)
      .json({ msg: 'Sucesso.' })
  } catch (error) {
    console.warn(error)

    return res.status(500).send()
  }
}

function signOut(req, res) { // eslint-disable-line no-unused-vars
  // TODO: pending implementation
}

module.exports = {
  signIn,
  signOut,
}
