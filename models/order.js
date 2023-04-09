//const Sequelize = require('sequelize');
const mongoose= require('mongoose');
//const sequelize = require('../util/database');
const Schema= mongoose.Schema;
//const Order = sequelize.define('order', {
  //  id: {
    //    type: Sequelize.INTEGER,
      //  autoIncrement: true,
       // allowNull: false,
       // primaryKey: true
    //},
    const orderSchema= new Schema({
        paymentId:{
            type:String,
            // required:true
        },
    //paymentId: {
      //  type: Sequelize.STRING,
        //allowNull: true
    //},
    orderId:{
        type:String,
        required:true
    },
    //orderId: {
      //  type: Sequelize.STRING,
        //allowNull: true
    //},
    status:{
        type:String,
        required:true
    },
    //status: {
      //  type: Sequelize.STRING,
        //allowNull: true
    //}
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
});

//module.exports = Order;
module.exports= mongoose.model('Order', orderSchema);