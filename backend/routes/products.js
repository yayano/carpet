import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../Controllers/products.js";
const productsRouter = express.Router();

//all products
productsRouter.get("/", getProducts);
//single product
productsRouter.get("/:id", getProduct);
//create product
productsRouter.post("/", createProduct);
//delete product
productsRouter.delete("/:id", deleteProduct);
//update product
productsRouter.patch("/:id", updateProduct);

export default productsRouter;
