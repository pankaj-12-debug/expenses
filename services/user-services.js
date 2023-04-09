//exports.getExpenses = (req, res) => {
  //  return req.user.getExpenses();
//}
const getExpenses=(req,where)=>{
    //return req.user.getExpenses(where);
    return Expense.find({userId: req.user._id});
}
module.exports={
    getExpenses
}