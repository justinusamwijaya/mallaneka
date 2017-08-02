var mongoose = require('mongoose')
var Schema = mongoose.Schema

var itemSchema = new Schema({
  name: String,
  price: Number,
  category: [{type:String}],
  outletPrice: Number,
  description: String,
  promo: [{type:String}]
})

var Item = mongoose.model('Item',itemSchema)

module.exports = Item