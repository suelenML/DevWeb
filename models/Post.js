const db = require('./db')

// Criar a tabela postagens com os itens: titulo e conteudo
const Post = db.sequelize.define('postagens',{
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true}) /* Essa linha cria a tabela, então deve ser chamada uma única vez e depois comentada */

module.exports = Post