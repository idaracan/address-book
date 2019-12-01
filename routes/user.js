const express = require("express");
const User = require("../models/user.js");
const app = express();

app.post("/user", (req, res) => {
  const { body } = req;
  const user = new User(body.user);
  user.save((err, newUser) => {
    if (err) {
      return res.status(400).json({ ...err });
    }
    return res.json({ message: "user saved", user: newUser });
  });
});
module.exports = app;
