const http = require('http');
http.createServer((req, res) => {res.write('<h1>Working<h1>')}).listen(3000, ()=> console.log("Servidor rodando"));