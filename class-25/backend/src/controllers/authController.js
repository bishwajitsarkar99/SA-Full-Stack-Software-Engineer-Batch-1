const { createUser, findUserByEmail } = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Common Registration
const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await createUser({ email, password });
    res.status(201).json({ success: true, message: "User registered", data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Session-based Login
const sessionLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email); // from the database
    console.log('login user', user)
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.userId = user.id; // Store in session
      console.log('session', req.session);
      console.log('session', req.session.userId);
      res.json({ success: true, message: "Logged in via Session", user: { id: user.id, email: user.email } });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// JWT-based Login
const jwtLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    console.log('login user', user)
    if (user && (await bcrypt.compare(password, user.password))) {
      const token =  jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "secret_key", { expiresIn: "1h" });
      res.json({ success: true, message: "Logged in via JWT", token, user: { id: user.id, email: user.email } });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.json({ message: "Logged out" });
};

module.exports = {
  register,
  sessionLogin,
  jwtLogin,
  logout,
};
