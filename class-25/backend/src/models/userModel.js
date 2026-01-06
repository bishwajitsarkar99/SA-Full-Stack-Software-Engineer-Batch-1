const db = require("../database/database");
const bcrypt = require("bcryptjs");

const createUser = async (userData) => {
  const { email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);

  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.run(sql, [email, hashedPassword], function (err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, email });
    });
  });
};

const findUserByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.get(sql, [email], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

const findUserById = async (id) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE id = ?";
    db.get(sql, [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};
