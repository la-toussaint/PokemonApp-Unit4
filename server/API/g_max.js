const express = require("express");
const router = express.Router();
const {
  getAllG_max,
  getG_maxById,
  updateG_maxById,
  deleteG_maxById,
  deleteAllG_max,
  createG_max,
} = require("../db/sql helpers/g_max");
const { requireUser } = require("./utils");

// GET /api/g_max
router.get("/", async (req, res, next) => {
  try {
    const g_max = await getAllG_max();
    res.send(g_max);
  } catch (error) {
    next(error);
  }
});

// GET /api/g_max/:g_maxId
router.get("/:g_maxId", async (req, res, next) => {
  try {
    const g_max = await getG_maxById(req.params.g_maxId);
    res.send(g_max);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const g_max = await createG_max(req.body);
    res.send(g_max);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/g_max/:g_maxId
router.patch("/:g_maxId", async (req, res, next) => {
  try {
    const g_max = await updateG_maxById(req.params.g_maxId, req.body);
    res.send(g_max);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/g_max/:g_maxId
router.delete("/:g_maxId", async (req, res, next) => {
  try {
    const g_max = await deleteG_maxById(req.params.g_maxId);
    res.send(g_max);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/g_max
router.delete("/", async (req, res, next) => {
  try {
    const g_max = await deleteAllG_max();
    res.send(g_max);
  } catch (error) {
    next(error);
  }
});

// export router
module.exports = router;
