const express = require("express");
const router = express.Router();
const {
  getAllBreeding,
  getBreedingById,
  updateBreedingById,
  deleteBreedingById,
  deleteAllBreeding,
  createBreeding,
} = require("../db/sql helpers/breeding");
const { requireUser } = require('./utils');

// GET /api/breeding
router.get("/", async (req, res, next) => {
  try {
    const breeding = await getAllBreeding();
    res.send(breeding);
  } catch (error) {
    next(error);
  }
});

// GET /api/breeding/:breedingId
router.get("/:breedingId", async (req, res, next) => {
  try {
    const breeding = await getBreedingById(req.params.breedingId);
    res.send(breeding);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const breeding = await createBreeding(req.body);
    res.send(breeding);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/breeding/:breedingId
router.patch("/:breedingId", requireUser, async (req, res, next) => {
  try {
    const breeding = await updateBreedingById(req.params.breedingId, req.body);
    res.send(breeding);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/breeding/:breedingId
router.delete("/:breedingId", requireUser, async (req, res, next) => {
  try {
    const breeding = await deleteBreedingById(req.params.breedingId);
    res.send(breeding);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/breeding
router.delete("/", requireUser, async (req, res, next) => {
  try {
    const breeding = await deleteAllBreeding();
    res.send(breeding);
  } catch (error) {
    next(error);
  }
});

// export router
module.exports = router;
