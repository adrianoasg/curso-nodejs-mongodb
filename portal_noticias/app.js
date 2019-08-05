const express = require('express')
const application = express()

application.set('view engine', 'ejs')

application.get('/', function(req, res) {
    res.render('home/index')
})

application.get('/formulario_inclusao', function(req, res) {
    res.render('admin/form_add_noticia')
})

application.get('/noticias', function(req, res) {
    res.render('noticias/noticias')
})

application.listen(3000, function() {
    console.log("Servidor rodando com Express")
})


