// import mongoose from 'mongoose'
// import Product  from './models/product.model' // module JS import style
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route.js')

// middleware
const express = require('express')
const app = express()

app.use(express.json()) // to pass json, in requests body
// app.use(express.urlencoded({ urlencoded: false })) //accept key-value pairs in your request bodies.

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

//  mongoDB setup
mongoose.connect(mongoURI)
    .then(() => {
        // start express server
        console.log("Connected to MongoDB")
        app.listen(port, () =>
            console.log(`Example app listening on port ${port}!`)
        )
    })
    .catch((err) => console.log(err))

app.get('/', (req, res) =>
    res.send({ 'Message': 'السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ', 'Status': 'API working fine' })
)


// routes
app.use('/api/products', productRoute)


// the following APIs have been upgraded with more concise design patterns, do check 'routes' & 'controllers'

//Get All
// app.get('/api/products', async (req, res) => {

// })

//Get by id
// app.get('/api/product/:id', async (req, res) => {

// })

//Add new record
// app.post('/api/addProduct', async (req, res) => {
   
// })

//update record
// app.put('/api/updateProduct/:id', async (req, res) => {
   
// })

// delete record
// app.delete('/api/del/:id', async (req, res) => {
    
// })





