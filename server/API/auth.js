const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { createUsers, getUsersByUsername } = require("../db/sql helpers/users");
const { JWT_SECRET } = require("../secrets");
const SALT_ROUNDS = 10;

router.get("/", async (req, res, next) => {
  try {
    res.send("WOW! A thing in your response!");
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    console.log(typeof password);
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    console.log(hashedPassword);
    const user = await createUsers({ username, password: hashedPassword });
    console.log(user);
    delete user.password;

    const token = jwt.sign(user, JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    delete user.password;

    res.send({ user, token });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    console.log(" req.body;: ", req.body);
    const { username, password } = req.body.user;
    console.log("username: ", username);
    const user = await getUsersByUsername(username).catch((error) =>
      console.error("login error", error)
    );
    console.log("user: ", user);
    const validPassword = await bcrypt.compare(password, user.password);
    console.log("password: ", password);
    console.log("user.password: ", user.password);
    console.log("validPassword: ", validPassword);
    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      delete user.password;

      res.status(200).send({ token, user });
    }
    res.send({ message: "invalid password" });
  } catch (error) {
    next(error);
  }
});

router.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
