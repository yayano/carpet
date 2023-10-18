import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouter from "./routes/products.js";
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use("/products", productsRouter);
const CONNECTION_URI = process.env.CONNECTION_URI;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, console.log(`server is Running on port :${PORT}`))
  )
  .catch((error) => console.log(error.message));
