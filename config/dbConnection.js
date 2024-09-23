var mysql = require('mysql');

var connMySql = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    console.log('Conexão com MySql Sucesso!')
    return connMySql;
}

