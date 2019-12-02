const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const token = req.get("token");
  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      res.status(400).json({ error: "invalid Token" });
    }
    req.user = decoded.user;
    next();
  });
};
