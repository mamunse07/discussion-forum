require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const feedRoutes =
  require("./routes/feed.routes");

require("./jobs/trending.job");

const app = express();

app.use(express.json());

/**
 * Connect MongoDB
 */

connectDB();

app.use("/feed", feedRoutes);


app.listen(process.env.PORT, () => {

  console.log(`Feed Service running on port ${process.env.PORT}`);

});