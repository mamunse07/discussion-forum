/**
 * Vote Model
 * One user can vote only once per post
 */

const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({

  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true
  },

  userId: {
    type: String,
    required: true
  },

  value: {
    type: Number,
    enum: [1, -1], // 1 = upvote, -1 = downvote
    required: true
  }

}, {
  timestamps: true
});

/**
 * Prevent duplicate vote
 */

voteSchema.index(
  { postId: 1, userId: 1 },
  { unique: true }
);

module.exports = mongoose.model("Vote", voteSchema);