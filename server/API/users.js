const express = require("express");
const router = express.Router();
const {
	createUsers,
	getUser,
	getUserById,
	getUserByUsername,
} = require("../db/sql helpers/users");



// GET /api/user
router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// GET /api/user/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await getUserById(req.params.userId);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.get("/:username", async (req, res, next) => {
	try {
	  const user = await getUserByUsername(req.params.username);
	  res.send(user);
	} catch (error) {
	  next(error);
	}
  });

router.post("/", async (req, res, next) => {
  try {
    const user = await createUsers(req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/user/:userId
router.patch("/:userId",  async (req, res, next) => {
  try {
    const user = await updateUserById(req.params.userId, req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/user/:userId
router.delete("/:userId", async (req, res, next) => {
  try {
    const user = await deleteUserById(req.params.userId);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/user
router.delete("/",  async (req, res, next) => {
  try {
    const users = await deleteAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// export router
module.exports = router;
