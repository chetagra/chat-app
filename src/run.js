const {server}=require('./server') 

const port = process.env.PORT || 3334

server.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})