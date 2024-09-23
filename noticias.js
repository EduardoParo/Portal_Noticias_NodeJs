var http = require('http');

var server = http.createServer((req, res) => {
    var categoria = req.url;

    if (categoria === '/tecnologia') {
        res.end("<html><body>Noticias de Tecnologia </body> </html>")
    } else if (categoria === '/moda') {
        res.end("<html><body>Noticias de Moda </body> </html>")
    }
}).listen(3000)

