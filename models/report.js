//const Sequelize= require('sequelize');
const mongoose = require("mongoose");
//const sequelize= require('../util/database');
const Schema = mongoose.Schema;
/*const Report= sequelize.define('report', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    fileUrl:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
*/
const reportSchema = new Schema({
    fileUrl: { type: String, required: true },
    userId:{
      type:Schema.Types.ObjectId,
      required:true,
      ref:'User'
  }
  });
  
//module.exports= Report;
module.exports = mongoose.model("Report", reportSchema);