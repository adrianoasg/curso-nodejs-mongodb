const application = require('./config/server')

// const rotaHome = require('./app/routes/home')(application)

// const rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(application)

// const rotaNoticias = require('./app/routes/noticias')(application)


application.listen(3000, function() {
    console.log('Servidor ON')
})

