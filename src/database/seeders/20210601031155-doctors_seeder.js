const { faker } = require('../../utils')

function doctorFactory() {
  const now = new Date()
  const createdAt = faker.date.past(2)
  const updatedAt = faker.date.between(createdAt, now)

  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    createdAt,
    updatedAt,
  }
}

module.exports = {
  up: async (queryInterface) => {
    const doctors = new Array(10).fill().map(doctorFactory)

    await queryInterface.bulkInsert('doctors', doctors, {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('doctors', null, {})
  },
}
