require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const voteRoutes = require("./routes/vote.routes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/votes", voteRoutes);

app.listen(process.env.PORT, () => {

  console.log(`Voting Service running on port ${process.env.PORT}`);

});