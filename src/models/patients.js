const Sequelize = require('sequelize')

class patients extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
      },
    )
  }

  static associate(models) {
    patients.belongsToMany(models.doctors, { through: 'appointments', as: 'doctors', foreignKey: 'patientId' })
  }
}

module.exports = patients
