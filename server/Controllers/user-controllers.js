const Users = require('../Models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)
require('dotenv').config()

var register = (req,res) =>{
  let hash = bcrypt.hashSync(req.body.password,salt)
  Users.create({
    username: req.body.username,
    password: hash,
    email: req.body.email,
    phone: req.body.email  
  },(err,result)=>{
    res.send(result)
  })
}

var login = (req,res) =>{
  let hash = bcrypt.hashSync('abcd',salt)
  Users.findOne({
    username: req.body.username
  },(err,result)=>{
    if(result === null){
      Users.create({
        username: req.body.username,
        password: hash
      },(err,result)=>{
        res.send(result)
      })
    } else{
      if(bcrypt.compare(req.body.password,result.password)){
         var token = {_id:result._id,username:result.username}
         res.send(token)
      }
    }
  })
}

var editUser = (req,res) =>{
  Users.findOne({
    _id: req.params.id
  },(err,result)=>{
    let hash = bcrypt.hashSync(req.body.password,salt)
    Users.updateOne({
      _id: req.params.id
    },{
      username: req.body.username || result.username,
      password: hash || result.password,
      email: req.body.email || result.email,
      phone: req.body.phone || result.phone
    },(err,result)=>{
      res.send(result)
    })
  })
}

var deleteUser = (req,res) =>{
  Users.remove({
    _id: req.params.id
  },(err,result)=>{
    res.send(result)
  })
}

var getAllUsers = (req,res) =>{
  Users.find({},(err,result)=>{
    res.send(result)
  })
}

var getOneUser = (req,res) =>{
  Users.findOne({
    _id: req.params.id
  },(err,result)=>{
    res.send(result)
  })
}

module.exports ={
  deleteUser,editUser,login,register,getAllUsers,getOneUser
}