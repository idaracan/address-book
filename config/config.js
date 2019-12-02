process.env = {
  PORT: process.env.PORT || 3000,
  urlDB: process.env.NODE_ENV
    ? process.env.MONGO_URI
    : "mongodb://localhost:27017/address-book",
  expiresIn: "48h",
  SEED: "secret Key"
};
