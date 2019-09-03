const express = require('express')
const socketIO = require('socket.io')
const pug = require('pug')
const logger = require('morgan')
const PORT = 4000;
const app = express()

app.set('view engine', 'pug')
app.use(logger('dev'))
app.use( express.static(__dirname + '/static'));
app.get('/', (req,res)=>{
    res.render('home')
})
const handleListening = ()=>{
    console.log('Server running in 4000 port')
}

let sockets = [];

const server = app.listen(PORT, handleListening) 
const io = socketIO.listen(server);

io.on('connection',(socket)=>{
    sockets.push(socket.id)
})

setInterval(()=>console.log(sockets),1000)