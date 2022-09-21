const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");

//Update User

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPass;
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(401).json("You can update only your own profile");
  }
});

//Delete User

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(404).json("User not found");
      } else {
        try {
          await Post.deleteMany({ username: user.username });
          const deleteUser = await User.findByIdAndDelete(req.params.id);
          const { password, ...others } = deleteUser._doc;
          res.status(200).json({ msg: "User deleted successfully", others });
        } catch (err) {
          res.status(500).send(err);
        }
      }
    } catch (err) {
      res.status(401).json("User not found");
    }
  } else {
    res.status(401).json("You can delete only your own profile");
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const findAllUsers = await User.find();

    res.status(200).json(findAllUsers);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Get User by ID

router.get("/:id", async (req, res) => {
  try {
    const findUsers = await User.findById(req.params.id);
    const { password, ...others } = findUsers._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get All Users

module.exports = router;
