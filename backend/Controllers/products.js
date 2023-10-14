import Products from "../models/Product.js";
import mongoose from "mongoose";

const getProducts = async (req, res) => {
  const products = await Products.find({}).sort({ createdAt: -1 });
  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const id = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "no such product" });
  }
  const product = await Products.findById(id);
  if (!product) {
    res.status(404).json({ error: "no such product" });
  }
  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  const emptyFields = [];
  if (!name) {
    emptyFields.push("name");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill in all the fields", emptyFields });
  }
  try {
    const product = await Products.create({ name, price });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such product" });
  }
  const product = await Products.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json({ error: "no such product to delete" });
  }
  res.status(200).json(product);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "no such product" });
  }
  const product = Products.findByIdAndUpdate({ _id: id }, { ...req.body });
  if (!product) {
    return res.status(404).json({ error: "no such product to update" });
  }
  res.status(200).json(product);
};
export { getProducts, getProduct, createProduct, deleteProduct, updateProduct };
