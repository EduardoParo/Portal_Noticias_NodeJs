module.exports.showHome = (app, req, res) => {

    let noticiasModel = new app.app.models.noticiasModel();

    noticiasModel.get5Noticias((error, dados) => {
        //console.log('Resultado da Query da home', dados)
        res.render('home/index', { noticias: dados });
    });

}