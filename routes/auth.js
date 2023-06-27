const express = require('express')
const Router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')
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
    const {LoginEmail, LoginSenha} = req.body

    User.findOne({ where: {email: LoginEmail} })
        .then((user) => {
            if(!user){
                res.send('Login failed: User not found');
                return
            }

            bcrypt.compare(LoginSenha, user.senha, (err ,result) => {
                if(result) {
                    res.send('Login success')
                } else {
                    res.send('Login failed: Incorrect password')
                }
            })
        })
        .catch((error) => {
            res.send('Ah error ocurred:' + error)
        })
})

Router.post('/signup', (req, res) =>{

    const { CadNome, CadEmail, CadSenha} = req.body

    bcrypt.hash(CadSenha, 10, (err, hashedPassword) => {
        if (err) {
            res.send('Error occured:' + error)
            return
        }
    //assincrono
    User.create({ 
        nome: CadNome,
        email: CadEmail,
        senha: hashedPassword,
    }).then(function(){
       console.log('Usuario criado')
       res.redirect('/auth/login')
       
    }).catch(function(erro){
        res.send("Houve um erro"+ erro)
    })
    
    })
})


module.exports = Router