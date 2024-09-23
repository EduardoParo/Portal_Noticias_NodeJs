
module.exports = (app) => {

    app.get('/noticia', (req, res) => {
        app.app.controllers.noticias.showNoticia(app, req, res)
    });

    app.get('/noticias', (req, res) => {
        app.app.controllers.noticias.showAllNoticias(app, req, res)
    });


}