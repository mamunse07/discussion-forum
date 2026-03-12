/**
 * API Gateway
 * Central entry point for all clients
 */

const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());
// app.use(express.json());

/**
 * Route to user service
 */
app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:4001",
    changeOrigin: true,
  }),
);

/**
 * Route to post service
 */
app.use(
  "/posts",
  createProxyMiddleware({
    target: "http://localhost:4002",
    changeOrigin: true,
  }),
);

/**
 * Route to voting service
 */
app.use(
  "/votes",
  createProxyMiddleware({
    target: "http://localhost:4003",
    changeOrigin: true,
  }),
);

app.listen(4000, () => {
  console.log("API Gateway running on port 4000");
});
