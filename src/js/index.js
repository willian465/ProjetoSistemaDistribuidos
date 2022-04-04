const http = require('http');
const port = 8080;
const hostname = '127.0.0.1';
/*http://127.0.0.1:8030*/
const server = http.createServer(function(req, res) {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.end('Boa noite outra vez turma !');
});
server.listen(port, hostname, function() {
console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/outros', function (req, res) {
    res.redirect('https://www.alura.com.br/')
  })

  app.get('/index.html', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<html>
    <head>
    <title>Página Inicial</title>
    </head>
    <body>
    <h1>Esta é a Página Inicial</h1>
    </body>
    </html>`);
   })

   app.get('/contato/:id', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<html>
    <head>
    <title>Recebimento de Parâmetro</title>
    </head>
    <body>
    <h1>O parâmetro ${req.params.id} foi recebido com sucesso.</h1>
    </body>
    </html>`);
   });
   
    

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

