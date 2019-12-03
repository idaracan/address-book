process.env = {
  PORT: process.env.PORT || 3000,
  urlDB: process.env.NODE_ENV
    ? process.env.MONGO_URI
    : "mongodb://localhost:27017/address-book",
  expiresIn: "48h",
  SEED: "secret Key",
  firebase_admin: process.env.NODE_ENV
    ? {
        type: process.env.firebase_admin_type,
        project_id: process.env.firebase_admin_project_id,
        private_key_id: process.env.firebase_admin_private_key_id,
        private_key: process.env.firebase_admin_private_key,
        client_email: process.env.firebase_admin_client_email,
        client_id: process.env.firebase_admin_client_id,
        auth_uri: process.env.firebase_admin_auth_uri,
        token_uri: process.env.firebase_admin_token_uri,
        auth_provider_x509_cert_url: process.env.firebase_admin_auth_provider,
        client_x509_cert_url: process.env.firebase_admin_client_cert
      }
    : require("../private/firebase-admin.json")
};
