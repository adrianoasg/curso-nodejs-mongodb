module.exports = function(application) {

    application.get('/noticia', function(req, res) {
        
        const connection = application.config.dbConnection()
        const noticiasModel = application.app.models.noticiasModel

        noticiasModel.getNoticia(connection, function(error, result) {
            res.render('noticias/noticia', {noticia : result})
        })
    })
}