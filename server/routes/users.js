var express = require('express');
var router = express.Router();
var UsersControllers = require('../Controllers/user-controllers')

/* GET users listing. */
router.get('/',UsersControllers.getAllUsers)
router.get('/:id',UsersControllers.getOneUser)
router.post('/register',UsersControllers.register)
router.post('/login',UsersControllers.login)
router.delete('/:id',UsersControllers.deleteUser)
router.put('/:id',UsersControllers.editUser)

module.exports = router;
