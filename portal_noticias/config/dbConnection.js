const mysql = require('mysql')

const connMySQL = function() {
    console.log('Conexão com banco de dados foi estabelecida')
    return mysql.createConnection({
        host : 'localhost',
        user : 'admin',
        password : 'abcd1234',
        database : 'portal_noticias'
    })
}

module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com banco de dados')
    return connMySQL   

}