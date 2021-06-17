const Sequelize = require('sequelize')

class appointments extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        doctorId: Sequelize.INTEGER,
        patientId: Sequelize.INTEGER,
        appointmentDate: Sequelize.DATE,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      },
    )
  }
}

module.exports = appointments
