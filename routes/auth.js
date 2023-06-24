const express = require('express')
const Router = express.Router()

/**
 * Existe uma rota /auth
 */
//rota login
Router.get('/login', (req, res) => {
    res.render('index')
    // console.log('esta dentro de /auth/login')
    // console.log(req.body.email, req.body.password)
})
//rota cadastro
Router.get('/signup', (req, res) =>{
    res.render('cadastro')
})

module.exports = Router