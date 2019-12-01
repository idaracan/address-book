const express = require("express");
const app = express();

app.use(require("./user"));
app.use(require("./contacts"));
module.exports = app;
