const voteService = require("../services/vote.service");

class VoteController {

  async vote(req, res) {

    try {

      const { postId, userId, value } = req.body;

      const result = await voteService.vote(postId, userId, value);

      res.json(result);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }

  async count(req, res) {

    try {

      const result = await voteService.getVoteCount(req.params.postId);

      res.json(result);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }

}

module.exports = new VoteController();