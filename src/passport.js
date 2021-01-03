
const passport = require('passport')
const localStrategy = require('passport-local')
const {User} = require('./db/model')


passport.serializeUser((user,done)=>{
   done(null,user.username)
})

passport.deserializeUser(async (username,done)=>{

    try {
        const user = await User.findOne({
            where : {
     
                username:username
            }
        })
       

        if (!user) {
            return done(new Error('no such user'))
        }

    

        return done(null,user)

      

    } catch (e) {
        done(e)
    }
   
})

passport.use(new localStrategy(async (username,password,done)=>{

    try {

        const user =await User.findOne({
            where:{
            username:username
        }})

        

        if (!user) {
            return done(null,false,{message:'Incorrect Username'})
        }

        if (user.password != password) {
            return done(null,false,{message:'Incorrect Password'})
        }

       

        return done(null,user)
        
    } catch (e) {
        done(e)
    }

}))

module.exports=passport
