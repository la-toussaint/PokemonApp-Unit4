const client = require("../client");
const util = require("../util");

// database functions
// get all poketype_egg
async function getAllPoketype_egg() {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM poketype_egg;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
}

// get poketype_egg by id
async function getPoketype_eggById(poketype_egg_id) {
  try {
    const {
      rows: [poketype_egg],
    } = await client.query(
      `
					SELECT *
					FROM poketype_egg
					WHERE poketype_egg_id =${poketype_egg_id};
				`
    );
    return poketype_egg;
  } catch (error) {
    throw error;
  }
}

// get poketype_egg price by id

// create new poketype_egg requires color, description, size, price
async function createPoketype_egg({ pokename, poketype, egg_group }) {
  try {
    const {
      rows: [poketype_egg],
    } = await client.query(
      `
		INSERT INTO poketype_egg(pokename, poketype, egg_group)
        VALUES($1, $2, $3)
        RETURNING *;
        `,
      [pokename, poketype, egg_group]
    );
    return poketype_egg;
  } catch (error) {
    throw error;
  }
}

// update poketype_egg by id
async function updatePoketype_eggById(poketype_egg_id, fields = {}) {
  // build the set string
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");

  // return early if this is called without fields
  if (setString.length === 0) {
    return;
  }

  try {
    const {
      rows: [poketype_egg],
    } = await client.query(
      `
	  UPDATE poketype_egg
	  SET ${setString}
	  WHERE id=${poketype_egg_id}
	  RETURNING *;
	  `,
      Object.values(fields)
    );
    return poketype_egg;
  } catch (error) {
    throw error;
  }
}

// delete poketype_egg by id
async function deletePoketype_eggById(poketype_egg_id) {
  // build the set string

  try {
    const {
      rows: [poketype_egg],
    } = await client.query(`
	DELETE FROM poketype_egg
	WHERE poketype_egg_id =${poketype_egg_id};
	RETURNING *;
	`);
    return poketype_egg;
  } catch (error) {
    throw error;
  }
}

// delete all poketype_egg
async function deleteAllPoketype_egg() {
  try {
    const { rows } = await client.query(`
        DELETE FROM poketype_egg;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
}

// export functions
module.exports = {
  getAllPoketype_egg,
  getPoketype_eggById,
  createPoketype_egg,
  updatePoketype_eggById,
  deletePoketype_eggById,
  deleteAllPoketype_egg,
};
