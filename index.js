let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.set('view engine', 'ejs');

io.on('connection', (socket) => {
    
    socket.on('disconnect', () => {
        console.log('Cliente se desconectou ' + socket.id)
    });
});

app.get('/', (req, res) => {
    res.render('index');
})

http.listen(8000, () => {
    console.log('Servidor Rodando!');
})