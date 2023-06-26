const db = require('./database')

const User = db.sequelize.define('usuarios', {
    nome:{
        type: db.Sequelize.STRING,    
    },
    email:{
        type: db.Sequelize.STRING,
        primaryKey: true
    },
    senha:{
        type: db.Sequelize.STRING,
    }
})

User.sync()
    .then(res => {
        console.log("Tabela criada ou existente: ", res)
    })
    .catch(err => {
        console.error("Erro ao criar tabela: ", err)
    })

module.exports = User
