const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  lastName: { type: String },
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", userSchema);
