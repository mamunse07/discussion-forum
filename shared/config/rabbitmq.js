const amqp = require("amqplib");

let channel;

async function connectRabbitMQ() {

  const connection =
    await amqp.connect("amqp://localhost");

  channel = await connection.createChannel();

}

function getChannel() {
  return channel;
}

module.exports = {
  connectRabbitMQ,
  getChannel
};