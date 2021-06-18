const bcrypt = require('bcrypt')

function isPasswordValid(password) {
  return typeof password === 'string'
  && password.match(/[a-z]/i)
  && password.match(/[0-9]/)
  && password.length >= 8
}

function hashPassword(plainPassword) {
  const salt = bcrypt.genSaltSync()
  const hashedPassword = bcrypt.hashSync(plainPassword, salt)

  return hashedPassword
}

function comparePasswords(plainPassword, hashedPasswords) {
  return bcrypt.compareSync(plainPassword, hashedPasswords)
}

module.exports = {
  isPasswordValid,
  hashPassword,
  comparePasswords,
}
