const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>hola<h1/>')

})

server.listen(4000, () => {
    console.log('Conectado a DB');
})