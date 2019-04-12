const express  = require('express')

const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')


const app = express()
app.use(cors())

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket =>{
    socekt.on('connectRom', box => {
        socket.join(box)
    })
})
mongoose.connect('mongodb+srv://rocketdrive:rennan520@cluster0-vpjbs.mongodb.net/rocketdrive?retryWrites=true', 
{
    useNewUrlParser: true
})
app.use((req, res,next)=>{
    req.io = io
    return netx()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/files', express.static(path.resolve(__dirname, 'tmp')))

app.use(require('./routers'))

server.listen(process.env.PORT || 3333)