const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { createUsers, getUsersByUsername } = require("../db/sql helpers/users");
const { authRequired } = require("./utils");
const { JWT_SECRET } = require("../secrets");

const SALT_ROUNDS = 10;

router.get("/", async (req, res, next) => {
  try {
    res.send("WOW! A thing!");
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const { username, password, fav_pokemon, name } = req.body.users;
    //hashing the password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    //sending username and hashed pw to database
    const users = await createUsers({
      username,
      password: hashedPassword,
      fav_pokemon,
      name,
    });
    //removing password from user object for security reasons
    delete password;

    //creating our token
    const token = jwt.sign(users, JWT_SECRET);

    //attaching a cookie to our response using the token that we created
    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    delete user.password;

    res.send({ users, fav_pokemon, name, token });
  } catch (error) {
    res.json({ error });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password, fav_pokemon, name } = req.body.users;
    const users = await getUsersByUsername(username);
    const validPassword = await bcrypt.compare(password, users.password);
    console.log("validPassword: ", validPassword);
    if (validPassword) {
      //creating our token
      const token = jwt.sign(users, JWT_SECRET);

      //attaching a cookie to our response using the token that we created
      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      delete users.password;
      console.log(
        "users, fav_pokemon, name, token: ",
        users,
        fav_pokemon,
        name,
        token
      );
      return res.send({ users, fav_pokemon, name, token });
    }
    res.json({ error: { message: "Invalid password" } });
  } catch (error) {
    res.json({ error });
  }
});

router.get("/logout", async (req, res, next) => {
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
    res.json({error});
  }
});
router.post("/test", authRequired);

module.exports = router;
