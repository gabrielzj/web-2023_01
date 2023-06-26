const Sequelize = require('sequelize')

const user = process.env.DATABASE_USER || "gabriel"
const password = process.env.DATABASE_PASSWORD || "pass!@#$%word%$#@!"
const dbname = process.env.DATABASE_NAME || "web"

//conexao com o banco
const sequelize = new Sequelize(dbname, user, password, {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
	console.log('Conectado com sucesso!')
}).catch(function(erro){
	console.log('Falha ao se conectar:'+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
