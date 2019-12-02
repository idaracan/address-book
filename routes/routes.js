const express = require("express");
const app = express();

app.use(require("./user"));
app.use(require("./contacts"));
app.use(require("./login.js"));
module.exports = app;
