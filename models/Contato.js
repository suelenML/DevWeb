const db = require('./db')

// Criar a tabela Contato com os itens: titulo e conteudo
const Contato = db.sequelize.define('contact',{
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.TEXT
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    mensagem:{
        type: db.Sequelize.TEXT
    }
})

//Contato.sync({force: true}) /* Essa linha cria a tabela, então deve ser chamada uma única vez e depois comentada */

module.exports = Contato