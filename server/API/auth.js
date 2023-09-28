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
    console.log(req.body);
    const { username, password } = req.body;
    //hashing the password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    //sending username and hashed pw to database
    const user = await createUsers({ username, password: hashedPassword });
    //removing password from user object for security reasons
    delete password;

    //creating our token
    const token = jwt.sign(user, JWT_SECRET);

    //attaching a cookie to our response using the token that we created
    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    delete password;
    // console.log(res)

    res.send({ user });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
	
	const userReg = userRegViaWeb ? hashedPassword : userPassword;
	const userPassword = await bcryptHash(password, SALT_ROUNDS)
    const user = await getUsersByUsername(username);
    console.log(user);
    const validPassword = await bcryptCompare(password, userPassword);

    delete userPassword;
    if (validPassword) {
      //creating our token
      const token = jwt.sign(
        { user: { username: username, password: hashedPassword } },
        JWT_SECRET
      );

      //attaching a cookie to our response using the token that we created
      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      delete userPassword;
      res.send({ user, token, 
	  loggedIn: true,
      message: "Logged In",
    })
}
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
router.post("/test", authRequired);

module.exports = router;
