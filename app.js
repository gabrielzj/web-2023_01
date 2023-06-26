require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
// const usersRouter = require('./routes/users')

require('./models/database')

const app = express();

const mustacheExpress = require("mustache-express")
const engine = mustacheExpress()
const PORT = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine("mustache", engine)
app.set('view engine', 'mustache')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '/public'))); //server pra reconhecer arquivos estaticos
//Config do body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/home', indexRouter)
app.use('/auth', authRouter)
//Rota que fazem parte de /users
// app.use('/users', usersRouter)
// app.use('/auth', bodyParser)

// se nao for nenhuma rota acima, gerar um erro
app.use(function(req, res, next) {
  // TODO gerar uma pagina 404
  res.status(404).send('Nao foi possivel encontrar essa rota.')
});
//especifica a porta utilizada
app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`)
})

module.exports = app;
