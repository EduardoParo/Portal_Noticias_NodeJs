

class Noticias {
    constructor() {
        this._connection = this._connection ?? app.config.dbConnection();
    }

    getNoticias(callBack) {
        this._connection.query(
            'select * from noticias',
            callBack
        );
    }

    getNoticia(idNoticia, callBack) {
        this._connection.query(
            `select * from noticias where id_noticia = '${idNoticia}'`,
            callBack
        );
    }

    insertNoticia(noticia, callBack) {
        console.log('noticiaaa aqui', noticia)
        this._connection.query(
            `insert into noticias set ? `, noticia,
            callBack
        );
    }

    get5Noticias(callBack) {
        this._connection.query('select * from noticias order by data_criacao desc limit 5', callBack)
    }
}




module.exports = () => {
    return Noticias;
}
