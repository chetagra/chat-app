const {Sequelize, DataTypes} = require('sequelize')


const db = new Sequelize('heroku_caadcb27275d663','be1b364a767d07','1137d8d6',{
    host:"us-cdbr-east-02.cleardb.com",
    dialect : 'mysql',


}) 

const User = db.define('User',{
    firstname:DataTypes.STRING,
        
   
    lastname:DataTypes.STRING,
        
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },

    password:{
        type:DataTypes.STRING,
        allowNull:false
    },

    age:DataTypes.INTEGER,
   

    gender:DataTypes.STRING,
        


}) 


db.sync({alter:true})

module.exports={
    User
}