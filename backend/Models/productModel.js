const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, 
  },
  stock: {
    type: Number,
    required: true,
    min: 0, 
  },
  image: {
    type: String, 
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
