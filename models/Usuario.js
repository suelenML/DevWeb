const db = require('./db')

// Criar a tabela Usuario com os itens: titulo e conteudo
const Usuario = db.sequelize.define('user',{
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.TEXT
    },
    senha:{
        type: db.Sequelize.STRING
    }
})

//Usuario.sync({force: true}) /* Essa linha cria a tabela, então deve ser chamada uma única vez e depois comentada */

module.exports = Usuario