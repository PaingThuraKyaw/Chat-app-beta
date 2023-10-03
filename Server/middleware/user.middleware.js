const { body } = require("express-validator");
const User = require("../model/user.mode");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.registerMiddleware = [
  body("username").isString().withMessage("username is required"),
  body("password")
    .isString()
    .trim()
    .isLength({ min: 4 })
    .withMessage("password is must be greater than 4"),
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ value });
      if (user) {
        throw new Error("Email is already exists");
      }
    }),
];

exports.LoginMiddleware = [
  body("password")
    .isString()
    .trim()
    .isLength({ min: 4 })
    .withMessage("password is must be greater than 4"),
  body("email").isEmail().normalizeEmail().withMessage("Email is invaild!"),
];

exports.isAuth = (req, res, next) => {
  const header = req.get("Authorization");
  if (!header) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = header.split(" ")[1];
  const match = jwt.verify(token, process.env.SECRET_KEY);

  if (!match) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};
