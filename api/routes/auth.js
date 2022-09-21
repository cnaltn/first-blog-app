const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
//Register

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json({ errorMsg: "User not found!" });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errorMsg: "Wrong Password!" });
    }
    const { password, ...others } = user._doc; //hiding password from the response
    res.status(200).json(others);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
