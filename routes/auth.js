const express = require('express')
const Router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')

/**
 * Existe uma rota /auth
 */
Router.post('/login', (req, res) =>{
    const {LoginEmail, LoginSenha} = req.body

    User.findOne({ where: {email: LoginEmail} })
        .then((user) => {
            if(!user){
                res.status(200).json({
                    message: 'Login failed: User not found',
                })
                return
            }

            bcrypt.compare(LoginSenha, user.senha, (err ,result) => {
                if(result) {
                    res.status(200).json({
                        message: 'Login success',
                    })
                } else {
                    res.status(200).json({
                        message: 'Login failed: Incorrect password',
                    })
                }
            })
        })
        .catch((error) => {
            res.send('Ah, error occurred!' + error)
        })
})

Router.post('/signup', (req, res) =>{

    const { CadNome, CadEmail, CadSenha} = req.body

    bcrypt.hash(CadSenha, 10, (err, hashedPassword) => {
        if (err) {
            res.status(200).json({
                message: 'Error occured:' + err,
            })
            return
        }
        //assincrono
        User.create({ 
            nome: CadNome,
            email: CadEmail,
            senha: hashedPassword,
        }).then(function(){
            res.status(200).json({
                message: 'Usuario criado',
            })
        }).catch(function(erro){
            res.status(200).json({
                message: 'Houve um erro: ' + erro,
            })
        })
    })
})


module.exports = Router