const dbConnection = require('../../config/dbConnection')

module.exports = function(application) {

    const connection = dbConnection()

    application.get('/noticias', function(req, res) {

        connection.query('select * from noticias', function(error, result) {
           res.render('noticias/noticias', {noticias : result})
        })
    })
}