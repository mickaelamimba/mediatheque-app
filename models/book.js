const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const BookSchema = new mongoose.Schema({
    title:{type: String,require: true},
    picture: {type: String,require: true},
    releaseDate:{type: Date,require: true},
    description:{type: String,require: true},
    author:{type: String,require: true},
    genre:{type: String,require: true},
    available:{type: Boolean, default: true},
    loan :{type: Boolean, default: false},
    createdAt:{type:Date,require: true, default:Date.now()},
    user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},

})

BookSchema.plugin(mongoosePaginate)
const  Book = mongoose.model('Book',BookSchema)
module.exports = Book