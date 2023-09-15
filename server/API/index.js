const express = require("express");
const router = express.Router();

// GET /api/health
router.get("/pokedex", (req, res, next) => {
  res.send("OK");
});
router.use('/auth', require('./auth'))
router.use("/pokedata", require('./pokedata'))
// ROUTER: /api/pokedata
router.use("/g_max", require('./g_max'))
// ROUTER: /api/g_max
router.use("/egg_group", require('./egg_group'))
// ROUTER: /api/egg_group
router.use("/poketype_egg", require('./poketype_egg'));
// ROUTER: /api/poketype_egg
router.use("/breeding", require('./breeding'));
// ROUTER: /api/breeding
router.use("/users", require('./users'));
router.use("/users/login", require('./users'));
router.use("/users/register", require('./users'));
router.use("/users/me", require('./users'));
router.use("/user", require('./users'));
router.use("/posts", require('./users'));


module.exports = router;
