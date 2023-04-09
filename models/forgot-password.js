//const Sequelize = require('sequelize');
const mongoose= require('mongoose');

//const sequelize = require('../util/database');
const Schema= mongoose.Schema;

//const ForgotPassword = sequelize.define('forgotpassword', {
  //  id: {
    //    type: Sequelize.UUID,
      //  allowNull: false,
       // primaryKey: true
    //},
    const forgotPasswordSchema= new Schema({
        active:{
            type:Boolean
        },
   // active: Sequelize.BOOLEAN,
    //expiresby: Sequelize.DATE
    expiresby:{
        type:Date
    },
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }

});

//module.exports = ForgotPassword;
module.exports= mongoose.model('ForgotPassword', forgotPasswordSchema);