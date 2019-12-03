const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const token = req.get("token");
  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(400).json(err);
    }
    req.user = decoded.user;
    next();
  });
};
module.exports = { checkToken };
