const admin = require("firebase-admin");
const config = require("../../config");

admin.initializeApp({
    credential: admin.credential.cert(config.firebase.serviceAcount),
  });

const auth = admin.auth();

module.exports = {
    admin: admin,
    auth: auth,
  };