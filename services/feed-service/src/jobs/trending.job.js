const cron = require("node-cron");

const feedService =
  require("../services/feed.service");

cron.schedule("*/5 * * * *", async () => {

  console.log("Updating trending posts");

  const feed =
    await feedService.generateFeed();

  console.log(feed.slice(0, 5));

});