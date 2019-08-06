module.exports = function(application) {

    application.get('/noticias', function(req, res) {

        const mysql = require('mysql')

        const connection = mysql.createConnection({
            host : 'localhost',
            user : 'admin',
            password : 'abcd1234',
            database : 'portal_noticias'
        })

        connection.query('select * from noticias', function(error, result) {
           res.render('noticias/noticias', {noticias : result})
        })
    })
}