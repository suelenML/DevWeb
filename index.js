const express = require("express");
const app = express();  //cria uma cópia da instancia do express para a variavel app, é do tipo const para nao ser alterada
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser'); // recebe o módulo body-parser'
const Post = require('./models/Post')
const Usuario = require('./models/Usuario')
const Contato = require('./models/Contato')



//Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout:'main'})) /*main é o template padrão da aplicação */
    app.set('view engine', 'handlebars')
    //body Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())



    //Rotas
    app.get('/cadastrarPost', function(req,res){
        res.render('formularioPosts') /* O parametro "formularioPosts" é o nome do arquivo que criei na pasta views */
    })

    app.get('/contato', function(req,res){
        res.render('formularioUsuariosContato') /* O parametro "formularioUsuariosContato" é o nome do arquivo que criei na pasta views */
    })

    /* Recupera a informação do banco ordenando do mais recente para o mais antigo */
    app.get('/', function(req,res){ 
        Post.findAll({order:[['id','Desc']]}).then(function(posts){
            res.render('sobre',{posts:posts})
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        }) 
        
    })

    /*Coleta a informação do formulario e salva no banco */
    app.post('/addUser', function(req,res){
        Usuario.create({
            nome:req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }).then(function(){ // se criado com sucesso redireciona
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
 
     })

     /*Coleta a informação do formulario e salva no banco */
    app.post('/addContato', function(req,res){
        Contato.create({
            titulo:req.body.titulo,
            email: req.body.email,
            telefone: req.body.telefone,
            mensagem: req.body.mensagem
        }).then(function(){ // se criado com sucesso redireciona
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
 
     })

     /*Coleta a informação do formulario e salva no banco */
    app.post('/addPost', function(req,res){
        Post.create({
            titulo:req.body.titulo,
            conteudo: req.body.conteudo,
            imagem: req.body.imagem
        }).then(function(){ // se criado com sucesso redireciona
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
 
     })

     /*Apagar um Post */
    app.get('/deletar/:id',function(req,res){
        Post.destroy({where:{'id':req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso!")
        }).catch(function(erro){
            res.send("Erro ao deletar: " + erro)
        })
    })




/* A funcao listen deve ser o utimo comando a ser executado */
app.listen(8081, function(){
    console.log("servidor rodando em 8081")
}) 