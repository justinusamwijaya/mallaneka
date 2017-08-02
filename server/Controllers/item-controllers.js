const Items = require('../Models/Item')

var addItem = (req,res) =>{
  Items.create({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    outletPrice: req.body.outlerPrice,
    description: req.body.description,
    promo: []
  },(err,result)=>{
    res.send(result)
  })
}

var editItem = (req,res) =>{
  Items.findOne({
    _id: req.params.id
  },(err,result)=>{
    Items.updateOne({
      name: req.body.name || result.name,
      price: req.body.price || result.price,
      category: req.body.category || result.category,
      outletPrice: req.body.outletPrice || result.outletPrice,
      description: req.body.description || result.description,
      promo: req.body.promo || result.promo
    })
  })
}

var deleteItem = (req,res) =>{
  Items.remove({
    _id: req.params.id
  },(err,result)=>{
    res.send(result)
  })
}

var getOneItem = (req,res) =>{
  Items.findOne({
    _id: req.params.id
  },(err,result)=>{
    res.send(result)
  })
}

var getAllItems = (req,res) =>{
  Items.find({},(err,result)=>{
    res.send(result)
  })
}

module.exports = {
  getAllItems,getOneItem,deleteItem,editItem,addItem
}