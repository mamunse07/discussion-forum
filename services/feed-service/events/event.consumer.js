const { getChannel } =
require("../../../shared/config/rabbitmq");

async function consumePostEvents() {

  const channel = getChannel();

  await channel.assertQueue("post_created"  );

  channel.consume(
    "post_created",
    msg => {

      const post =
        JSON.parse(msg.content.toString());

      console.log("New post event", post);

    }
  );

}

module.exports = {
  consumePostEvents
};