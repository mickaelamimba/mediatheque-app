const mongoose = require("mongoose")
require('mongoose-type-email')
mongoose.SchemaTypes.Email.defaults.message ='Email address is invalid'
const UserSchema =  new  mongoose.Schema({
    name :{type: String, require: true},
    firstName:{type:String,require: true},
    address: {type: String,require: true},
    email:{type: mongoose.SchemaTypes.Email,require: true},
    birthDate :{type: Date,require: true},
    validateAccount:{type: Boolean,require: true, default:false},
    token:{type: String,require: true},
    hash:{type:String,require: true},
    salt:{type:String,require: true},
    role:{type: String, default:'Inscrit'},
})
const User = mongoose.model("User",UserSchema)
module.exports = User