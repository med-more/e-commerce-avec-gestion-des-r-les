const express = require("express");
const { getComments, deleteComment } = require("../Controllers/commentsController");

const router = express.Router();

router.get("/", getComments);
router.delete("/:id", deleteComment);

module.exports = router;
