require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const { connectRabbitMQ } =
require("../../../shared/config/rabbitmq");


const feedRoutes =
  require("./routes/feed.routes");
const { consumePostEvents } = require("../events/event.consumer");

require("./jobs/trending.job");

connectRabbitMQ();
consumePostEvents();

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