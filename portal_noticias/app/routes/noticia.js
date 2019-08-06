module.exports = function(application) {

    application.get('/noticia', function(req, res) {
        
        const connection = application.config.dbConnection()

        connection.query('select * from noticias where id_noticia = 2', function(error, result) {
            res.render('noticias/noticia', {noticia : result})
        })
    })
}