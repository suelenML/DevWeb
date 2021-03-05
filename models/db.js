const Sequelize = require('sequelize');

// Conexao Banco de Dados mysql
const sequelize = new Sequelize('devWeb','root', 'pipoca123',{
    host: "localhost",
    dialect: 'mysql'
})

//Para exportar
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}