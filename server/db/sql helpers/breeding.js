const client = require("../db/client");
const util = require("../db/util");

async function getAllBreeding() {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM breeding;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
}

// get breeding by id
async function getBreedingById(breed_id) {
  try {
    const {
      rows: [breeding],
    } = await client.query(
      `
					  SELECT *
					  FROM breeding
					  WHERE breed_id =${breed_id};
				  `
    );
    return breeding;
  } catch (error) {
    throw error;
  }
}

// create new breeding
async function createBreedingData({
  breeding_id,
  pokename,
  egg_group1,
  egg_group2,
  gender,
  comp_parent,
}) {
  try {
    const {
      rows: [breeding],
    } = await client.query(
      `
        INSERT INTO breeding(pokename, egg_group1, egg_group2, gender, comp_parent)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,

      [
        breeding_id,
        pokename,
        egg_group1,
        egg_group2 ? egg_group2 : "N/A",
        gender,
        comp_parent,
      ]
    );
    return breeding;
  } catch (error) {
    throw error;
  }
}

// add new breeding
async function createBreeding({
  breeding_id,
  pokename,
  egg_group1,
  egg_group2,
  gender,
  comp_parent,
}) {
  try {
    const {
      rows: [breeding],
    } = await client.query(
      `
        INSERT INTO breeding(breeding_id, pokename, egg_group1, egg_group2, gender, comp_parent)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,

      [
        breeding_id,
        pokename,
        egg_group1,
        egg_group2 ? egg_group2 : "N/A",
        gender,
        comp_parent,
      ]
    );
    return breeding;
  } catch (error) {
    throw error;
  }
}

// update breeding by id
async function updateBreedingById(breed_id, fields = {}) {
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
      rows: [breeding],
    } = await client.query(
      `
        UPDATE breeding
        SET ${setString}
        WHERE id=${breed_id}
        RETURNING *;
        `,
      Object.values(fields)
    );
    return breeding;
  } catch (error) {
    throw error;
  }
}

// delete breeding by id
async function deleteBreedingById(breed_id) {
  try {
    const {
      rows: [breeding],
    } = await client.query(`
        DELETE FROM breeding
        WHERE breed_id =${breed_id};
        RETURNING *;
        `);
    return breeding;
  } catch (error) {
    throw error;
  }
}

// delete all breeding
async function deleteAllBreeding() {
  try {
    const { rows } = await client.query(`
        DELETE FROM breeding;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
}

// export functions
module.exports = {
  getAllBreeding,
  getBreedingById,
  createBreeding,
  createBreedingData,
  updateBreedingById,
  deleteBreedingById,
  deleteAllBreeding,
};
