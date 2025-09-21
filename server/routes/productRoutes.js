import express from "express";
import Product from "../models/Product.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

// Public: Get products with search,filter and pagination
router.get("/filter/price", async (req, res) => {
  try{
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;


    const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: "i"}}
    : {};


    const category = req.query.category ? { category: req.query.category } : {};


    let priceFilter = {};
    if (req.query.minPrice || req.query.maxPrice) {
      priceFilter.price ={};
      if(req.query.minPrice) priceFilter.price.$gte =  Number(req.query.minPrice);
      if(req.query.maxPrice) priceFilter.price.$lte = Number(req.query.maxPrice);
    }

    const filters = { ...keyword, ...category, ...priceFilter };
    
    let sort = {};
    if (req.query.sortBy) {
      if (req.query.sortBy === "priceAsc") sort = { price: 1 };
      else if (req.query.sortBy === "priceDesc") sort = { price: -1 };
      else if (req.query.sortBy === "newest") sort = { createdAt: -1 };
      else if (req.query.sortBy === "oldest") sort = { createdAt: 1 };
    }

    
    const products = await Product.find(filters)
    .sort(sort)
    .skip(skip)
    .limit(limit);


    const total = await Product.countDocuments(filters);


    res.json({
      products,
      page,
      pages: Math.ceil(total/ limit),
      total,
    });
  } catch(err){
    res.status(500).json({ message: "Server error ", error: err.message});
  }
});


//get a single product
router.get("/:id", async (req, res) => {
  try{
    const product = await Product.findById(req.params.id);
    if(product) {
      res.json(product);
    } else{
      res.status(404).json({message: "Product not found"});
    }
  } catch(err){
    res.status(500).json({message : "Server error", error:err.message});
  }
});

// Admin: Create product
router.post("/", protect, admin, async (req, res) => {
  try{
    const { name, price,category, description, countInStock } = req.body;
    const product = new Product({ name, price, category,description, countInStock, });
    

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch(err){
    res.status(500).json({message :"Server error", error:err.message});
  }
 
});

// Admin: Update product
router.put("/:id", protect, admin, async (req, res) => {
  try{

  
  const { name, price, category,description, countInStock } = req.body;
  const product = await Product.findById(req.params.id);

  if(product){
    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;
    product.description = description || product.description;
    product.countInStock = countInStock || product.countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message :" Product not found"});
  }
  } catch (err){
    res.status(500).json({message : "Server error ", error: err.message});
  }
});

// Admin: Delete product
router.delete("/:id", protect, admin, async (req, res) => {
 
 try{
  const product = await Product.findById(req.params.id);

  if(product){
    await product.deleteOne();
    res.json({message : "Product removed"});
  } else{
    res.status(404).json({message :" Product not found"});
  }
 } catch (err){
  res.status(500).json({message : "Server error", error:err.message});
 }
 
});

export default router;
