const express = require('express')

const {User} = require('../db/model')

const route = express.Router()

const path= require('path')

const passport = require('../passport')



route.get('/terms',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/components/term.html'))
})

route.get('/privacy',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/components/privacy.html'))
})

route.post('/register', async (req,res)=>{
    try {
        let firstname = req.body.firstname
        let lastname = req.body.lastname
        let username = req.body.username
        let age = req.body.age
        let gender = req.body.gender
        let password = req.body.password

        const user = await User.create({
            firstname:firstname,
            lastname:lastname,
            username:username,
            age:age,
            gender:gender,
            password:password
        })        
         res.redirect('/')
        
    } catch (error) {
        console.error(error);
    }

})



route.get('/chat',(req,res)=>{
    if (req.user) {
     
        
        let client = req.user.dataValues.username
         

       
        res.render(path.join(__dirname,'../public/view/chat.hbs'),{client})
    }
    else{
        res.redirect('/')
    }
})


route.post('/login',passport.authenticate('local',{
    successRedirect: '/chat',
    failureRedirect: '/'
}))




module.exports=route



