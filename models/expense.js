//const Sequelize = require('sequelize');
const mongoose=require('mongoose');
const Schema= mongoose.Schema;

//const sequelize = require('../util/database');

//const Expense = sequelize.define('expense', {
   // id: {
     //   type: Sequelize.INTEGER,
       // autoIncrement: true,
        //allowNull: false,
        //primaryKey: true
    //},
    const expenseSchema= new Schema({
        amount:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        userId:{
            type:Schema.Types.ObjectId,
            required:true,
            ref:'User'
        }
   // amount: {
     //   type: Sequelize.INTEGER,
       // allowNull: false
    //},
    //description: {
      //  type: Sequelize.STRING,
       // allowNull: false
    //},
    //category: {
      //  type: Sequelize.STRING,
       // allowNull: false
    //}
});

//module.exports = Expense;
module.exports= mongoose.model('Expense', expenseSchema);