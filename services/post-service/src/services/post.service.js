/**
 * Business logic layer
 */

const { getChannel } =
require("../../../../shared/config/rabbitmq");
const postRepository = require("../repositories/post.repository");

class PostService {

  async createPost(data) {

    const post = await postRepository.createPost(data);

    console.log({post})

    const channel = getChannel();

    channel.sendToQueue(
      "post_created",
      Buffer.from(JSON.stringify(post))
    );
    
    return post;

  }

  async getPosts(page, limit) {

    return postRepository.getPosts(limit, page);

  }

  async addComment(data) {

    return postRepository.createComment(data);

  }

  async getComments(postId) {

    return postRepository.getComments(postId);

  }

}

module.exports = new PostService();