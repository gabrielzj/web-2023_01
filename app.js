const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const mustacheExpress = require("mustache-express");
const engine = mustacheExpress();
const PORT = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine("mustache", engine);
app.set('view engine', 'mustache');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
//Rota que fazem parte de /users
app.use('/users', usersRouter);

// se nao for nenhuma rota acima, gerar um erro
app.use(function(req, res, next) {
  // TODO gerar uma pagina 404
  res.status(404).send('Nao foi possivel encontrar essa rota.');
});

app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`);
})

module.exports = app;
