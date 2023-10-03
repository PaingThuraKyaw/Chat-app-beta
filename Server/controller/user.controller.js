const bcrypt = require("bcrypt");
const User = require("../model/user.mode");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.register = async (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).json({
      message: result.array(),
    });
  }

  const { username, password, email } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    if (hashPassword) {
      await User.create({ username, password: hashPassword, email });

      res.status(201).json({
        message: "Register Success",
      });
    }
  } catch {
    res.status(404).json({
      message: "Email is exists!",
    });
  }
};

exports.login = async (req, res) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).json({
      message: result.array(),
    });
  }

  try {
    const { email, password, select } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Email is not exists!",
      });
    }

    console.log({ password, UserPassword: user.password });
    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      res.status(400).json({
        message: "password is not exists!",
      });
    }

    const token = jwt.sign(
      { email: user.email, userId: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login success",
      success: true,
      data: select,
      token
    });
  } catch {
    res.status(500).json({
      message: "An error occurred while processing the request.",
    });
  }
};
