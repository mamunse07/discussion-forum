/**
 * User business logic
 */

const userRepository = require("../repositories/user.repository");
const { hashPassword, comparePassword } = require("../utils/password");
const generateToken = require("../utils/jwt");

class UserService {

  async signup(data) {

    const { name, email, password } = data;

    const existingUser = await userRepository.findByEmail(email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await hashPassword(password);

    const user = await userRepository.createUser(
      name,
      email,
      hashedPassword
    );

    const token = generateToken(user);

    return {
      user,
      token
    };
  }

  async login(email, password) {

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await comparePassword(
      password,
      user.password
    );

    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken(user);

    return {
      user,
      token
    };
  }

}

module.exports = new UserService();