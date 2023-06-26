const db = require('./database')

/**
 * A partir daqui cria a tabela usuario, porem colocando esse código
 * em um arquivo user.js ele não reconhece e da erro ao acessar o banco
 * 
 * Toda vez que for executado o app.js e por consequencia executar o database.js
 * a tabela vai ser dropada e criada, os dados serão perdidos.
 */
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
