const jwt = require("jsonwebtoken");
const User = require("../model/user");
const config = require("config");
const secret = config.get("secret");

exports.auth = async (req, res, next) => {
  const token = req.headers.Authorization;
  try {
    const decoded = jwt.verify(token, secret);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      res.status(403).json({ msg: "Not authorized" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(505).json({ msg: error.message });
  }
};
