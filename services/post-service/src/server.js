/**
 * Post Service Server
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const postRoutes = require("./routes/post.routes");

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Connect MongoDB
 */

connectDB();

/**
 * Routes
 */

app.use("/posts", postRoutes);

app.listen(process.env.PORT, () => {

  console.log(`Post Service running on port ${process.env.PORT}`);

});