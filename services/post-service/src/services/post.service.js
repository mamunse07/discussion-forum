/**
 * Business logic layer
 */

const postRepository = require("../repositories/post.repository");

class PostService {

  async createPost(data) {

    return postRepository.createPost(data);

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