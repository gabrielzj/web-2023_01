require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')

require('./models/database')

const app = express();

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public'))); //server pra reconhecer arquivos estaticos
//Config do body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(indexRouter)
app.use('/auth', authRouter)

// se nao for nenhuma rota acima, gerar um erro
app.use(function(req, res, next) {
  // TODO gerar uma pagina 404
  res.status(404).send('Nao foi possivel encontrar essa rota.')
});
//especifica a porta utilizada
app.listen(3000, () => {
  console.log(`Running in http://localhost:${3000}`)
})
