const express = require("express");
const User = require("../models/user.js");
const app = express();

app.post("/user", (req, res) => {
  console.log(req.body);
  const { body } = req;
  const user = new User(body.user);
  user
    .save()
    .then(res.status(200).json({ message: "user saved" }))
    .catch(err => res.status(400).json({ message: "error", err }));
});
module.exports = app;
