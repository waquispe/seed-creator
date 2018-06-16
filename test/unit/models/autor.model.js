module.exports = (sequelize, Sequelize) => {
  const MODEL = sequelize.define('autor', {
    id_autor: {
      type          : Sequelize.INTEGER(),
      primaryKey    : true,
      autoIncrement : true
    },
    nombre   : Sequelize.STRING(),
    ci       : Sequelize.INTEGER(),
    telefono : Sequelize.INTEGER()
  }, {
    schema: 'uno'
  })

  MODEL.associate = (models) => {
    models.autor.hasMany(models.libro, { as: 'libros', foreignKey: { name: 'fid_autor' } })
  }

  return MODEL
}
