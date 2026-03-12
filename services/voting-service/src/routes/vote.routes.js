const express = require("express");

const router = express.Router();

const voteController = require("../controllers/vote.controller");

router.post("/", voteController.vote);

router.get("/:postId", voteController.count);

module.exports = router;