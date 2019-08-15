const { check, validationResult } = require('express-validator')

module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res) {
        res.render('admin/form_add_noticia', { validacao : {}, noticia : {} })
    })

    
    application.post('/noticias/salvar', [
        check('titulo').not().isEmpty().withMessage('Título é obrigatório'), 
        check('resumo').not().isEmpty().withMessage('Resumo é obrigatório'),
        check('resumo').not().isEmpty().isLength({ min: 10, max: 100 }).withMessage('Resumo deve conter entre 10 e 100 caracteres'),
        check('autor').not().isEmpty().withMessage('Autor é obrigatório'),
        check('data_noticia').not().isEmpty().withMessage('Data é obrigatória'),
        check('noticia').not().isEmpty().withMessage('Notícia é obrigatório')
    ], function(req, res) {

        const noticia = req.body

        const erros = validationResult(req)

        console.log(erros)  

        if (!erros.isEmpty()) {
            res.render('admin/form_add_noticia', { validacao : erros.array(), noticia })   
            return      
        }   
            
        const connection = application.config.dbConnection()
        const noticiasModel = new application.app.models.NoticiasDAO(connection)

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias')
            })
    })
}