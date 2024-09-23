module.exports.showNoticia = (app, req, res) => {
    let noticiasModel = new app.app.models.noticiasModel();

    let idNoticia = req.query.id_noticia;

    noticiasModel.getNoticia(idNoticia, (err, dados) => {
        console.log('getNoticia',dados)
        res.render("noticias/noticia", { noticia: dados });
    });
}

module.exports.showAllNoticias = (app, req, res) => {
    let noticiasModel = new app.app.models.noticiasModel();

    noticiasModel.getNoticias((err, json) => {
        console.log(json)
        res.render("noticias/noticias", { noticias: json });
    })
}