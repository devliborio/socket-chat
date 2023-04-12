let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.set("view engine", 'ejs');

app.get('/', (req, res) => {
    
})


http.listen(8000, () => {
    console.log('Servidor Rodando!');
})