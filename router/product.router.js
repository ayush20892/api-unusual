const express = require('express')
const router = express.Router()

const { Products } = require('../models/productModel.js')


router.use(express.json())

router.route('/')
.get(async (req, res) => {
  try{
    console.log("Hello")
    const products = await Products.find({})
    res.json({ success: true, products})
  } catch (err) {
    res.status(500).json({ success: false, message: "Unable to get products", errorMessage: err.message })
  }
})




module.exports = router