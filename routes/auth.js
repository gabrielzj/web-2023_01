const express = require('express')
const Router = express.Router()

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
    res.send('Email:'+req.body.LoginEmail+'\tSenha:'+req.body.LoginSenha)
})

Router.post('/signup', (req, res) =>{
    res.send('Nome:' + req.body.CadNome + '\tEmail:' +req.body.CadEmail + 'Senha:' + req.body.CadSenha)
})


module.exports = Router