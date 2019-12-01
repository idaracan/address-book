const express = require("express");
const User = require("../models/user.js");
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("../private/firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.post("/contacts", (req, res) => {
  const { contact } = req.body;
  const { userName } = req.body.user;
  const Contact = db.collection(userName).doc(contact.email);
  Contact.set(contact);
  return `added contact ${contact}`;
});
module.exports = app;
