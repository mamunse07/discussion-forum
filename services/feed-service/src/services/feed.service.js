const axios = require("axios");

const redis = require("../../../../shared/config/redis");

async function getFeed() {

  const cachedFeed = await redis.get("feed");

  if (cachedFeed) {

    console.log("Cache hit");

    return JSON.parse(cachedFeed);

  }

  console.log("Cache miss");

  const feed = await generateFeed();

  await redis.set(
    "feed",
    JSON.stringify(feed),
    { EX: 60 }
  );

  return feed;

}

function calculateScore(post) {

  const upvotes = post.upvotes || 0;
  const downvotes = post.downvotes || 0;
  const comments = post.comments || 0;

  const hours =
    (Date.now() - new Date(post.createdAt)) /
    (1000 * 60 * 60);

  const timeDecay = hours / 24;

  const score =
    upvotes -
    downvotes +
    Math.log(comments + 1) -
    timeDecay;

  return score;

}

async function generateFeed() {

  const posts = await axios.get(
    "http://localhost:4002/posts"
  );

  const ranked = posts.data.map(post => {

    const score = calculateScore(post);

    return {
      postId: post._id,
      score
    };

  });

  ranked.sort((a, b) => b.score - a.score);

  return ranked;

}

module.exports = {
  generateFeed
};