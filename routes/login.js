const express = require("express");

const jwt = require("jsonwebtoken");
const User = require("../models/user");
const app = express();

app.post("/login", (req, res) => {
  const { userName, password } = req.body.user;
  if (!(userName && password)) {
    return res.status(400).json({ message: "insert username and password" });
  }
  User.findOne({ userName }, (err, dbUser) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
        err
      });
    }
    if (!dbUser || dbUser.password !== password) {
      return res.status(400).json({
        message: "wrong user or password"
      });
    }
    const token = jwt.sign({ user: dbUser }, process.env.SEED, {
      expiresIn: process.env.expiresIn
    });
    res.status(200).json({
      message: `user ${dbUser.userName} logged in correctly`,
      token
    });
  });
});

module.exports = app;
