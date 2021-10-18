const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
   status :{type: String, require: true, default:'En cours de validation'},
   user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},

})
const Customer = mongoose.model("Customer",CustomerSchema)

module.exports = Customer