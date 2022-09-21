const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create Post

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Update Post

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({ msg: "Post has been updated", updatedPost });
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only update your own post");
    }
  } catch (err) {
    res.status(500).json("Post could not be found");
  }
});

//Delete Post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // if (post.username === req.body.username) {
    try {
      await post.delete();
      res.status(200).json({ msg: "Post deleted successfully", post });
    } catch (err) {
      res.status(500).send(err);
    }
    // } else {
    //   res.status(401).json("You can delete only your own post");
    // }
  } catch (err) {
    res.status(404).json("Post not found");
  }
});

//Find Post

router.get("/findposts", async (req, res) => {
  try {
    const findPost = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(findPost);
  } catch (err) {
    res.status(500).send(err);
  }
});
//Find Post by id

router.get("/:id", async (req, res) => {
  try {
    const findPostbyId = await Post.findById(req.params.id);
    res.status(200).json(findPostbyId);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
