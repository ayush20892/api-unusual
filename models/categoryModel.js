const mongoose = require('mongoose')
require('mongoose-type-url')

const CategorySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "ProductType ID required"]
    },
    img: {
      type: mongoose.SchemaTypes.Url,
      required: [true, "ProductType Image required"]
    },
    name: {
      type: String,
      required: [true, "ProductType Name required"]
    },
    page: {
      type: String,
      required: [true, "ProductType Page name required"]
    }
  })


  const Category = mongoose.model("category", CategorySchema)

  module.exports = { Category }