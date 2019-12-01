const express = require("express");
const User = require("../models/user.js");
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("../private/firebase-admin.json");

app.post("/contacts", (req, res) => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://address-book-1f08a.firebaseio.com"
  });
  const db = admin.firestore();

  const { contact } = req.body;
  const { userName } = req.body.user;
  const Contact = db.collection(userName).doc(contact.email);
  Contact.set(contact);
  return `added contact ${contact}`;
});
module.exports = app;
