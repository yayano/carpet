import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

/* use middleware look expressjs.com*/
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

const CONNECTION_URI = process.env.CONNECTION_URI;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, console.log(`server is Running on port :${PORT}`))
  )
  .catch((error) => console.log(error.message));
 