const Post = require("../models/Post");

async function index(req, res) {
  try {
    console.log("hello");
    const posts = await Post.all;
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ err });
  }
}

async function create(req, res) {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { index, create };
