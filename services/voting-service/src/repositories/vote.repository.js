const Vote = require("../models/vote.model");

class VoteRepository {

  async findUserVote(postId, userId) {

    return Vote.findOne({ postId, userId });

  }

  async createVote(data) {

    return Vote.create(data);

  }

  async updateVote(id, value) {

    return Vote.findByIdAndUpdate(
      id,
      { value },
      { new: true }
    );

  }

  async countVotes(postId) {

    const votes = await Vote.find({ postId });

    let upvotes = 0;
    let downvotes = 0;

    votes.forEach(v => {
      if (v.value === 1) upvotes++;
      else downvotes++;
    });

    return { upvotes, downvotes };

  }

}

module.exports = new VoteRepository();