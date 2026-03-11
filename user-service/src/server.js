/**
 * User Service Server
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`User Service running on port ${process.env.PORT}`);
});