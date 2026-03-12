/**
 * Comment Schema
 */

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    index: true
  },

  authorId: {
    type: String
  },

  content: {
    type: String
  }

}, {
  timestamps: true
});

/**
 * Compound index
 */

commentSchema.index({
  postId: 1,
  createdAt: -1
});

module.exports = mongoose.model("Comment", commentSchema);