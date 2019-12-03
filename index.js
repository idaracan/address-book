require("./config/config.js");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  process.env.urlDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, res) => {
    if (err) {
      console.log("connection error, could not connect to database!!!");
    }
    console.log("connected to database!");
  }
);

app.use(require("./routes/routes"));

app.listen(port, () => console.log(`listening port ${port}`));
