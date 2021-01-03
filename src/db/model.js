const {Sequelize, DataTypes} = require('sequelize')

const db = new Sequelize('logindb','myuser','mypassword',{

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