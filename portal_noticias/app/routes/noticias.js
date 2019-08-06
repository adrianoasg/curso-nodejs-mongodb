module.exports = function(application) {

    application.get('/noticias', function(req, res) {

        const connection = application.config.dbConnection()

        connection.query('select * from noticias', function(error, result) {
           res.render('noticias/noticias', {noticias : result})
        })
    })
}