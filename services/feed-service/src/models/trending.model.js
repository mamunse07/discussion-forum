const mongoose = require("mongoose");

const trendingSchema = new mongoose.Schema({

  postId: String,
  score: Number,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  "TrendingPost",
  trendingSchema
);