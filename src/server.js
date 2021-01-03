const express = require('express')

const http = require('http')

const app =express()

const passport = require('./passport')

const session = require('express-session')


app.use(session({
    secret:'keyboard cat',
    resave : true,
    saveUninitialized : true
}))

app.set('view engine','hbs')

const server = http.createServer(app)

const io = require('socket.io')(server)

app.use('/',express.static(__dirname+'/public'))

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use(passport.initialize())

app.use(passport.session())

app.use('/',require('./routes/root'))

let names =["imitwglqfs",
    "vpnwhvzzqs",
    "mmsxvmfjmg",
    "nijrsgbkvb",
    "lktkspodoz",
    "pufztiqxkr",
    "clbfrmoell",
    "klucweobge",
    "mgjishhkxc",
    "arxycazrdz"]

io.on('connection',(socket)=>{
   console.log('user connected:'+socket.id)
   
   let username = names[parseInt(Math.random()*10)]

   socket.on('msg_send',(data)=>{
       socket.broadcast.emit('msg_rcvd',{
           username:username,
           msg:data.msg
       })
   })

   

})


 module.exports={
     server
    }
 