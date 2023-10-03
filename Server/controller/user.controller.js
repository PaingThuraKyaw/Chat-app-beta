const bcrypt = require("bcrypt");
const User = require("../model/user.mode");
exports.register = async (req, res) => {
  const { username, password, email } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    if (hashPassword) {
      const user = await User.create({ username, password, email });
      if (!user) {
        res.status(404).json({
          message: "Register fail",
        });
      }
      res.status(201).json({
        message: "Register Success",
      });
    }
  } catch {
    res.status(404).json({
      message: "Register fail",
    });
  }
};
