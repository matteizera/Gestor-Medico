const { faker } = require('../../utils')

function appointmentFactory(doctors, patients) {
  const now = new Date()
  const createdAt = faker.date.past(2)
  const updatedAt = faker.date.between(createdAt, now)

  return {
    doctorId: faker.random.arrayElement(doctors).id,
    patientId: faker.random.arrayElement(patients).id,
    appointmentDate: faker.date.recent(),
    description: faker.lorem.text().replace(/[\n\r][ ][[\n\r]/g, '\n').slice(0, 255),
    createdAt,
    updatedAt,
  }
}

module.exports = {
  up: async (queryInterface) => {
    const [doctors] = await queryInterface.sequelize.query('SELECT id from doctors')
    const [patients] = await queryInterface.sequelize.query('SELECT id from patients')
    const appointments = new Array(1000).fill().map(() => appointmentFactory(doctors, patients))

    await queryInterface.bulkInsert('appointments', appointments, {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('appointments', null, {})
  },
}
