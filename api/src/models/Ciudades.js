const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('ciudades', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      idProv: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },  
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};