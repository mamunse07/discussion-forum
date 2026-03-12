const voteRepository = require("../repositories/vote.repository");

class VoteService {

  async vote(postId, userId, value) {

    const existing = await voteRepository.findUserVote(postId, userId);

    if (!existing) {

      return voteRepository.createVote({
        postId,
        userId,
        value
      });

    }

    return voteRepository.updateVote(existing._id, value);

  }

  async getVoteCount(postId) {

    return voteRepository.countVotes(postId);

  }

}

module.exports = new VoteService();