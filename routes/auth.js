const express = require('express')
const Router = express.Router()

/**
 * Existe uma rota /auth
 */
Router.post('/login', (req, res) => {
    console.log('esta dentro de /auth/login')
    console.log(req.body.email, req.body.password)
})

module.exports = Router