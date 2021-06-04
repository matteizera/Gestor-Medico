const { faker } = require('../../utils')

function patientFactory() {
  const now = new Date()
  const createdAt = faker.date.past(2)
  const updatedAt = faker.date.between(createdAt, now)

  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('###########'),
    createdAt,
    updatedAt,
  }
}

module.exports = {
  up: async (queryInterface) => {
    const patients = new Array(100).fill().map(patientFactory)

    await queryInterface.bulkInsert('patients', patients, {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('patients', null, {})
  },
}
