const express = require("express");
const router = express.Router();
const {
  getAllEgg_group,
  getEgg_groupById,
  updateEgg_groupById,
  deleteEgg_groupById,
  deleteAllEgg_group,
  createEgg_group,
} = require("../db/sql helpers/egg_group");
const { requireUser } = require('./utils');

// GET /api/egg_group
router.get("/", async (req, res, next) => {
  try {
    const egg_group = await getAllEgg_group();
    res.send(egg_group);
  } catch (error) {
    next(error);
  }
});

// GET /api/egg_group/:egg_groupId
router.get("/:egg_groupId", async (req, res, next) => {
  try {
    const egg_group = await getEgg_groupById(req.params.egg_groupId);
    res.send(egg_group);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const egg_group = await createEgg_group(req.body);
    res.send(egg_group);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/egg_group/:egg_groupId
router.patch("/:egg_groupId", async (req, res, next) => {
  try {
    const egg_group = await updateEgg_groupById(
      req.params.egg_groupId,
      req.body
    );
    res.send(egg_group);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/egg_group/:egg_groupId
router.delete("/:egg_groupId", async (req, res, next) => {
  try {
    const egg_group = await deleteEgg_groupById(req.params.egg_groupId);
    res.send(egg_group);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/egg_group
router.delete("/", async (req, res, next) => {
  try {
    const egg_group = await deleteAllEgg_group();
    res.send(egg_group);
  } catch (error) {
    next(error);
  }
});

// export router
module.exports = router;
