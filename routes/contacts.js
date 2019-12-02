const serviceAccount = require("../private/firebase-admin.json");
const User = require("../models/user.js");
const admin = require("firebase-admin");
const express = require("express");

const app = express();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.post("/contacts", (req, res) => {
  const { contact } = req.body;
  const { userName } = req.body.user;
  const Contact = db.collection(userName).doc(contact.email);
  Contact.set(contact);
  return res.status(200).json({ message: `added contact` });
});
module.exports = app;
