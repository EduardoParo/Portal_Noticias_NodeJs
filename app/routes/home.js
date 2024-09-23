module.exports = (app) => {
    app.get('/', (req, res) => {
        app.app.controllers.home.showHome(app, req, res)
    });
}