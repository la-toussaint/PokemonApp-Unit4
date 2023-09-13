const client = require("../db/client");
const util = require("../db/util");

async function getAllEgg_group() {
  try {
    const { rows } = await client.query(`
		SELECT *
        FROM egg_group:
		`);
    return rows;
  } catch (error) {
    throw error;
  }
}

// get egg_group by id
async function getEgg_groupById(egg_group_id) {
  try {
    const {
      rows: [egg_group],
    } = await client.query(`
			SELECT *
			FROM egg_group
			WHERE egg_group_id =${egg_group_id};
			`);
    return egg_group;
  } catch (error) {
    throw error;
  }
}

// create new egg_group
async function createEgg_groupData({ pokename, egg_group }) {
  try {
    const {
      rows: [egg_group],
    } = await client.query(`
        INSERT INTO egg_group(pokename, egg_group)
		VALUES($1, $2)
        RETURNING *;
		`);
    return egg_group;
  } catch (error) {
    throw error;
  }
}

// add new egg_group
async function createEgg_group({ pokename, egg_group }) {
  try {
    const {
      rows: [egg_group],
    } = await client.query(`
        INSERT INTO egg_group(pokename, egg_group)
        VALUES($1)
        RETURNING *;
        `);
    return egg_group;
  } catch (error) {
    throw error;
  }
}

// update egg_group by id
async function updateEgg_groupById(egg_group_id, fields = {}) {
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
      rows: [egg_group],
    } = await client.query(
      `
        UPDATE egg_group
        SET ${setString}
        WHERE id=${egg_group_id}
        RETURNING *;
        `,
      Object.values(fields)
    );
    return egg_group;
  } catch (error) {
    throw error;
  }
}

// delete egg_group by id
async function deleteEgg_groupById(egg_group_id) {
  try {
    const {
      rows: [egg_group],
    } = await client.query(`
        DELETE FROM egg_group
        WHERE egg_group_id =${egg_group_id};
        RETURNING *;
        `);
    return egg_group;
  } catch (error) {
    throw error;
  }
}

// delete all egg_group
async function deleteAllEgg_group() {
  try {
    const { rows } = await client.query(`
        DELETE FROM egg_group;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
}

// export functions
module.exports = {
  getAllEgg_group,
  getEgg_groupById,
  createEgg_group,
  createEgg_groupData,
  updateEgg_groupById,
  deleteEgg_groupById,
  deleteAllEgg_group,
};
