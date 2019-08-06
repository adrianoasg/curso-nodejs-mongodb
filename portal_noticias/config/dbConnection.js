const mysql = require('mysql')

module.exports = function() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'admin',
        password : 'abcd1234',
        database : 'portal_noticias'
    })

}