const express = require("express");
const app = express();

app.use(require("./user"));
//app.use(require("./contacts.js"));
module.exports = app;
