const feedService = require("../services/feed.service");

async function getFeed(req, res) {

  try {

    const feed =
      await feedService.generateFeed();

    res.json(feed);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

}

module.exports = { getFeed };