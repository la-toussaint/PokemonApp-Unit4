const express = require("express");
const router = express.Router();

const {getAllPoketype_egg,getPoketype_eggById, updatePoketype_eggById, deletePoketype_eggById, deleteAllPoketype_egg,
  createPoketype_egg } = require('./db/poketype_egg');
const { requireUser } = require("./utils");

// GET /api/poketype_egg
router.get("/", async (req, res, next) => {
  try {
    const poketype_egg = await getAllPoketype_egg();
    res.send(poketype_egg);
  } catch (error) {
    next(error);
  }
})

// GET /api/poketype_egg/:poketype_eggId
router.get("/:poketype_eggId", async (req, res, next) => {
  try {
    const poketype_egg = await getPoketype_eggById(req.params.poketype_eggId);
    res.send(poketype_egg);
  } catch (error) {
    next(error);
  }
})

router.post("/", async (req, res, next) => {
  try {
    const poketype_egg = await createPoketype_egg(req.body);
    res.send(poketype_egg);
  } catch (err) {
    next(err);
  }
})

// PATCH /api/poketype_egg/:poketype_eggId
router.patch("/:poketype_eggId", requireUser, async (req, res, next) => {
  try {
    const poketype_egg = await updatePoketype_eggById(
      req.params.poketype_eggId,
      req.body
    );
    res.send(poketype_egg);
  } catch (error) {
    next(error);
  }
})

// DELETE /api/poketype_egg/:poketype_eggId
router.delete("/:poketype_eggId", requireUser, async (req, res, next) => {
  try {
    const poketype_egg = await deletePoketype_eggById(
      req.params.poketype_eggId
    );
    res.send(poketype_egg);
  } catch (error) {
    next(error);
  }
})

// DELETE /api/poketype_egg
router.delete("/", requireUser, async (req, res, next) => {
  try {
    const poketype_egg = await deleteAllPoketype_egg();
    res.send(poketype_egg);
  } catch (error) {
    next(error);
  }
});
// export router
module.exports = router;
