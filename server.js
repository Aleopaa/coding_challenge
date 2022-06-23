const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require("./routes/post");
server.use("/post", postRoutes);
server.use("/get", postRoutes);
server.get("/", (req, res) =>
  res.send("Welcome to the coding challenge server")
);

module.exports = server;
