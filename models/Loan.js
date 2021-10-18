const mongoose = require("mongoose");
const loanSchema = new mongoose.Schema({
    recoveryInfo : {
        date :{type:Date, require: false},
        recovery:{type:Date, require: false},
        limit :{type:Date, require: false,}
    },
    dateOfLoan :{type:Date, require: true},
    user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    book:{type:mongoose.Schema.Types.ObjectId, ref:'Book'},

})
const  Loan = mongoose.model('Loan',loanSchema)
module.exports = Loan