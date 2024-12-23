const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', (socket)=>{
    console.log('Un usuario se ha conectado');
    /*socket.on('chat', (mnsge)=>{
        console.log('Mensaje: '+mnsge);
    }); */

    socket.on('chat', (mnsge)=>{
        io.emit('chat', mnsge);
    });
});

//!Ruta inicial
// app.get('/', (req,res)=>{
//     res.sendFile(`${__dirname}/cliente/index.html`);
// });

//todo: Enlazar estilos.css - TODAS LAS RUTAS
app.use(express.static('cliente')); //codigo importante

server.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto http://localhost:3000');
});


