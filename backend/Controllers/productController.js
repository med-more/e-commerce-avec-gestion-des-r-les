const Product = require('../Models/productModel');
const path = require('path');

exports.addProduct = async (req, res) => {
  try {
    const { title, description, price, stock } = req.body;
    if (!title || !description || !price || !stock) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let imageUrl = '';
    if (req.file) {
      imageUrl = req.file.path; 
    }

    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      image: imageUrl,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { title, description, price, stock } = req.body;

    let updatedData = {
      title,
      description,
      price,
      stock
    };

    if (req.file) {
      updatedData.image = req.file.path;
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};