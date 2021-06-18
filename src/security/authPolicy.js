
function isPasswordValid(password) {
  return typeof password === 'string'
  && password.match(/[a-z]/i)
  && password.match(/[0-9]/)
  && password.length >= 8
}

module.exports = {
  isPasswordValid,
}
