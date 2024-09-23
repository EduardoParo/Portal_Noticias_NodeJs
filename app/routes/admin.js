
module.exports = (app) => {
    app.get('/form', (req, res) => {
        app.app.controllers.admin.showForm(app, req, res);
    });

    app.post('/noticia/salvar', (req, res) => {
        app.app.controllers.admin.insertNoticia(app, req, res);
    });
}
