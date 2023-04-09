//const Sequelize = require('sequelize');
const mongoose= require('mongoose');

//const sequelize = require('../util/database');
const Schema= mongoose.Schema;
//const User = sequelize.define('user', {
  //  id: {
    //    type: Sequelize.INTEGER,
      //  autoIncrement: true,
        //allowNull: false,
       // primaryKey: true
    //},
    const userSchema= new Schema({
        name:{
            type:String,
            required:true
        },
 //   name: {
   //     type: Sequelize.STRING,
     //   allowNull: false,
    //},
    email:{
        type:String,
        required:true
    },
    //email: {
      //  type: Sequelize.STRING,
       // allowNull: false,
        //unique: true
    //},
    telephone:{
        type:String,
        required:true
    },
    //telephone: {
      //  type: Sequelize.STRING,
        //allowNull: false,
    //},
    password:{
        type:String,
        required:true
    },
    //password: {
      //  type: Sequelize.STRING,
       // allowNull: false,
    //},
    //isPremiumuser: Sequelize.BOOLEAN
    isPremiumUser:{
        type:Boolean
    }
});

//module.exports = User;
module.exports= mongoose.model('User', userSchema);