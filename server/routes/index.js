var express = require('express');
var router = express.Router();
var ItemsControllers = require('../Controllers/item-controllers')
/* GET home page. */
router.get('/item',ItemsControllers.getAllItems)
router.get('/item/:id',ItemsControllers.getOneItem)
router.post('/item',ItemsControllers.addItem)
router.delete('/item/:id',ItemsControllers.deleteItem)
router.put('/item/:id',ItemsControllers.editItem)


module.exports = router;
