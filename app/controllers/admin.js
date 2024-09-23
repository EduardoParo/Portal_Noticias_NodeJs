module.exports.showForm = (app, req, res) => {
    res.render("admin/form_add_noticia", { valid: {}, noticia: {} });
}

module.exports.insertNoticia = (app, req, res) => {
    let noticia = req.body;

    req.assert('titulo', 'Titulo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('autor', 'Autor é obrigatório').len(5, 100);
    req.assert('noticia', 'Noticia é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });

    let erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia", { valid: erros, noticia: noticia });
        return
    }

    let noticiasModel = new app.app.models.noticiasModel();
    console.log('Inserindo =>', noticia)

    noticiasModel.insertNoticia(noticia, (err, dados) => {
        res.redirect('/noticias')
    })
}