const serviceAccount = process.env.firebase_admin;
const { checkToken } = require("../middlewares/validation.js");
const admin = require("firebase-admin");
const express = require("express");
console.log(serviceAccount);
const app = express();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.post("/contacts", [checkToken], (req, res) => {
  const { contact } = req.body;
  const { userName } = req.body.user;
  if (!contact.email) {
    return res
      .status(400)
      .json({ message: "You need a contact mail to add contact data" });
  }
  const firebaseContact = db.collection(userName).doc(contact.email);
  firebaseContact
    .get()
    .then(doc => {
      if (!doc.exists) {
        firebaseContact.set(contact);
        return res
          .status(200)
          .json({ message: "added contact", contact: contact });
      } else {
        return res.status(400).json({ message: "contact already exists!" });
      }
    })
    .catch(err => {
      return res
        .status(500)
        .json({ message: "Internal server error", error: err });
    });
});
module.exports = app;
