/**
 * Post Schema
 */

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

  authorId: {
    type: String,
    required: true,
    index: true
  },

  title: {
    type: String,
    required: true
  },

  content: {
    type: String
  },

  imageUrl: {
    type: String
  },

  totalUpvotes: {
    type: Number,
    default: 0
  },

  totalDownvotes: {
    type: Number,
    default: 0
  }

}, {
  timestamps: true
});

/**
 * Index for fast sorting
 */

postSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Post", postSchema);