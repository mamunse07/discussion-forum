/**
 * User Controller
 */

const userService = require("../services/user.service");

class UserController {
  async signup(req, res) {
    try {
      const result = await userService.signup(req.body);

      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const result = await userService.login(email, password);

      res.json(result);
    } catch (error) {
      console.log({ error });

      res.status(401).json({
        message: error.message,
      });
    }
  }
}

module.exports = new UserController();
