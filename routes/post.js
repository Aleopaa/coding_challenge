const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.get("/get", postsController.index);
router.post("/", postsController.create);

module.exports = router;
