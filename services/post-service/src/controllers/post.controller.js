/**
 * Post controller
 */

const postService = require("../services/post.service");

class PostController {

  async createPost(req, res) {

    try {

      const post = await postService.createPost(req.body);

      res.status(201).json(post);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }

  async getPosts(req, res) {

    try {

      const page = parseInt(req.query.page) || 1;
      const limit = 20;

      const posts = await postService.getPosts(page, limit);

      res.json(posts);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }

  async addComment(req, res) {

    try {

      const comment = await postService.addComment(req.body);

      res.status(201).json(comment);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }

  async getComments(req, res) {

    try {

      const comments = await postService.getComments(req.params.postId);

      res.json(comments);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }

}

module.exports = new PostController();