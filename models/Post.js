const db = require("../dbConfig/init");

module.exports = class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.name = data.name;
    this.body = data.body;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        // console.log(db);
        let postData = await db.query("SELECT * FROM posts;");
        let posts = postData.rows.map((a) => new Post(a));
        console.log(posts);
        resolve(posts);
      } catch (err) {
        reject("Error retrieving posts");
      }
    });
  }

  static async create(postData) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, name, body } = postData;
        let newPostData = await db.query(
          "INSERT INTO posts (title, name, body) VALUES ($1, $2, $3) RETURNING *;",
          [title, name, body]
        );
        let post = new Posts(newPostData.rows[0]);
        resolve(post);
      } catch (err) {
        reject("Book could not be created");
      }
    });
  }
};
