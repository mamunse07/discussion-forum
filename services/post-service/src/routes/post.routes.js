/**
 * Post Routes
 */

const express = require("express");

const router = express.Router();

const postController = require("../controllers/post.controller");

router.post("/", postController.createPost);

router.get("/", postController.getPosts);

router.post("/comments", postController.addComment);

router.get("/:postId/comments", postController.getComments);

module.exports = router;