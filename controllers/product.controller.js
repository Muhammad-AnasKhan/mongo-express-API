const Product = require('../models/product.model.js')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}

const addProduct = async (req, res) => {
    console.log(req.body)
    res.send(req.body)
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}

const updateProduct =  async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        if (!product) {
            return res.status(404).json({ 'message': 'Product not found / udpated' })
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}

const del = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deletedProduct) {
            res.json({ 'message': 'Product not found' })
        }
        res.status(200).json({ 'deletedProduct': deletedProduct, 'message': `Product deleted` })
    } catch (error) {
        res.status(500).json({ 'error': error })
    }
}


module.exports = {getProducts,
    getById,
    addProduct,
    updateProduct,
    del
}