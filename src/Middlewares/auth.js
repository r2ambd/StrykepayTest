import jwt from "jsonwebtoken";

import key from "../config/constants";

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const decoded = jwt.verify(token, key.JWT_KEY);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).send("Authentication failed");
  }
};
