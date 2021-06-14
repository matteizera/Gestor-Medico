const Sequelize = require('sequelize')

class doctors extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
      },
      {
        sequelize,
      },
    )
  }

  static associate(model) {
    doctors.belongsToMany(model.patients, { through: 'appointments', as: 'patients', foreignKey: 'doctorId' })
  }
}

module.exports = doctors
