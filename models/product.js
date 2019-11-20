var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
   name: {type: String, required: true},
   image: {type:String, required:true},
   price: {type: Number, required: true},
   description: {type: String, required: true},
   category: {type: String , required: true}
});

module.exports = mongoose.model('Product', schema);