/**
 * User Repository
 * Handles all DB queries related to user
 */

const db = require("../config/db");

class UserRepository {

  async createUser(name, email, password) {

    const query = `
      INSERT INTO users(name,email,password)
      VALUES($1,$2,$3)
      RETURNING *
    `;

    const values = [name, email, password];

    const result = await db.query(query, values);

    return result.rows[0];
  }

  async findByEmail(email) {

    const query = `
      SELECT * FROM users WHERE email=$1
    `;

    const result = await db.query(query, [email]);

    return result.rows[0];
  }

}

module.exports = new UserRepository();