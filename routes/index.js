const express = require('express')
const Router = express.Router()

//rota raiz
Router.get('/', (req, res) => {
    res.send('<p>Estou na Home</p>')
})

module.exports = Router