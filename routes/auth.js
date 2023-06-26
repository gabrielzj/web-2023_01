const express = require('express')
const Router = express.Router()
const User = require('../models/users')
/**
 * Existe uma rota /auth
 */
//rota login > rendereiza template de login
Router.get('/login', (req, res) => {
    res.render('login')
    // console.log('esta dentro de /auth/login')
    // console.log(req.body.email, req.body.password)
})
//rota cadastro > renderiza template de cadastro
Router.get('/signup', (req, res) =>{
    res.render('cadastro')
})

Router.post('/login', (req, res) =>{
    console.log(User)

    res.send('Email:'+req.body.LoginEmail+'\tSenha:'+req.body.LoginSenha)
})

Router.post('/signup', (req, res) =>{
      
    User.create({
        nome: req.body.CadNome,
        email: req.body.CadEmail,
        senha: req.body.CadSenha
    }).then(function(){
       res.send("Usuario criado") 
    }).catch(function(erro){
        res.send("Houve um erro"+ erro)
    })
})


module.exports = Router