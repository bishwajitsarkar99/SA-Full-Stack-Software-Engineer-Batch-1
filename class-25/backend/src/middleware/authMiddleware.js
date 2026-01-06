const jwt = require("jsonwebtoken");
const { findUserById } = require("../models/userModel");

// Middleware for Session-based Auth
const sessionAuth = async (req, res, next) => {
  if (req.session.userId) {
    req.userId = req.session.userId;
    next();
  } else {
    res.status(401).json({ message: "Unauthorized: No session found" });
  }
};

// Middleware for JWT-based Auth
const jwtAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret_key");
    
    req.userId = decoded.userId;
    req.user = await findUserById(req.userId);
    // role
    
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = { sessionAuth, jwtAuth };
