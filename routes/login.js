const express = require("express");

const jwt = require("jsonwebtoken");
const User = require("../models/user");
const app = express();

app.post("/login", (req, res) => {
  const body = req.body;
  User.findOne({ userName: body.user.userName }, (err, dbUser) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err
      });
    }

    if (!dbUser || dbUser.password !== body.user.password) {
      return res.status(400).json({
        ok: false,
        msg: "wrong user or password"
      });
    }
    const token = jwt.sign({ user: dbUser }, process.env.SEED, {
      expiresIn: process.env.expiresIn
    });
    res.json({
      ok: true,
      user: dbUser,
      token
    });
  });
});

module.exports = app;
