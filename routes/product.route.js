const express = require('express')
const Product = require('../models/product.model.js')
const router = express.Router()
const { getProducts, getById, addProduct, updateProduct, del } = require('../controllers/product.controller.js')

//Get All
router.get('/', getProducts)
//Get by id
router.get('/:id', getById)

//Add new product
router.post('/addProduct', addProduct)

//update record
router.put('/updateProduct/:id', updateProduct)

// delete record
router.delete('/del/:id', del)

module.exports = router
