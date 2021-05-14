const mongoose = require('mongoose')
require('mongoose-type-url')

const ProductSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Cannot Enter product without Name, please enter Name"],
        unique: [true, "Unique ID to be entered"]
      },
      img: {
        type: mongoose.SchemaTypes.Url,
        required: [true, "Cannot Enter product without image link, please enter img link"]
      },
      name: {
        type: String,
        required: [true, "Cannot Enter product without Name"]
      },
      price: {
        type: Number,
        required: [true, "Cannot Enter product without price"]
      },
      beforeDiscount: {
        type: String,
      },
      quantity: {
        type: Number
      },
      inStock: {
        type: Boolean,
        required: [true, "Cannot Enter product without inStock"]
      },
      fastDeliveryAvailable: {
        type: Boolean,
        required: [true, "Cannot Enter product without fastDeliveryAvailable"]
      },
      trending: {
        type: Boolean,
        required: [true, "Cannot Enter product without trending"]
      }
})

const Products = mongoose.model("ecomproducts",ProductSchema)

module.exports = { Products }


