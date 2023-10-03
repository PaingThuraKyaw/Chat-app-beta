const { profile } = require("../controller/profile.controller");
const { register, login } = require("../controller/user.controller");
const {
  registerMiddleware,
  LoginMiddleware,
  isAuth,
} = require("../middleware/user.middleware");

const userRouter = require("express").Router();

userRouter.post("/register", registerMiddleware, register);

userRouter.post("/login", LoginMiddleware, login);

userRouter.get("/profile",isAuth,profile);

module.exports = userRouter;



