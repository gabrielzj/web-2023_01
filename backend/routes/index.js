const express = require('express')
const Router = express.Router()
const path = require('path')

//rota raiz
Router.get('/', (req, res) => {
    res.send('<p>Servidor esta rodando...</p>')
})

module.exports = Router