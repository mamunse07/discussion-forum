const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

class PostRepository {

  async createPost(data) {
    return Post.create(data);
  }

  async getPosts(limit = 20, page = 1) {

    return Post
      .find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  }

  async createComment(data) {
    return Comment.create(data);
  }

  async getComments(postId) {

    return Comment
      .find({ postId })
      .sort({ createdAt: -1 })
      .limit(100);
  }

}

module.exports = new PostRepository();