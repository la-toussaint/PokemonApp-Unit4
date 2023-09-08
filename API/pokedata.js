const express = require("express");
const router = express.Router();
const {
  getAllPokedata,
  getPokedataById,
  updatePokedataById,
  deletePokedataById,
  deleteAllPokedata,
  createPokedata,
} = require("./db/pokedata");
const { requireUser } = require("./utils");

// GET /api/pokedata
router.get("/", async (req, res, next) => {
  try {
    const pokedata = await getAllPokedata();
    res.send(pokedata);
  } catch (error) {
    next(error);
  }
});

// GET /api/pokedata/:pokedataId
router.get("/:pokedataId", async (req, res, next) => {
  try {
    const pokedata = await getPokedataById(req.params.pokedataId);
    res.send(pokedata);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const pokedata = await createPokedata(req.body);
    res.send(pokedata);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/pokedata/:pokedataId
router.patch("/:pokedataId", requireUser, async (req, res, next) => {
  try {
    const pokedata = await updatePokedataById(req.params.pokedataId, req.body);
    res.send(pokedata);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/pokedata/:pokedataId
router.delete("/:pokedataId", requireUser, async (req, res, next) => {
  try {
    const pokedata = await deletePokedataById(req.params.pokedataId);
    res.send(pokedata);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/pokedata
router.delete("/", requireUser, async (req, res, next) => {
  try {
    const pokedata = await deleteAllPokedata();
    res.send(pokedata);
  } catch (error) {
    next(error);
  }
});

// export router
module.exports = router;
