const client = require("../client");
const util = require("../util");

async function getAllG_max() {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM g_max;
        `);
    console.log("rows: ", rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

// get g_max by id
async function getG_maxById(g_max_id) {
  try {
    const {
      rows: [g_max],
    } = await client.query(
      `
					  SELECT *
					  FROM g_max
					  WHERE g_max_id =${g_max_id};
				  `
    );
    return g_max;
  } catch (error) {
    throw error;
  }
}

// create new g_max
async function createG_maxData({
  g_max_move,
  pokename,
  g_max_move_type,
  b4g_max_image,
  post_g_max_image,
  post_g_max_height,
}) {
  try {
    const {
      rows: [g_max],
    } = await client.query(
      `
        INSERT INTO g_max(g_max_move, pokename, g_max_move_type, b4g_max_image, post_g_max_image, post_g_max_height)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,

      [
        g_max_move,
        pokename,
        g_max_move_type,
        b4g_max_image,
        post_g_max_image,
        post_g_max_height,
      ]
    );

    return g_max;
  } catch (error) {
    throw error;
  }
}

// add new g_max
async function createG_max({
  g_max_move,
  pokename,
  g_max_move_type,
  b4g_max_image,
  post_g_max_image,
  post_g_max_height,
}) {
  try {
    const {
      rows: [g_max],
    } = await client.query(
      `
        INSERT INTO g_max(g_max_move, pokename, g_max_move_type, b4g_max_image, post_g_max_image, post_g_max_height)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,
      [
        g_max_move,
        pokename,
        g_max_move_type,
        b4g_max_image,
        post_g_max_image,
        post_g_max_height,
      ]
    );

    return g_max;
  } catch (error) {
    throw error;
  }
}

// update g_max by id
async function updateG_maxById(g_max_id, fields = {}) {
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
      rows: [g_max],
    } = await client.query(
      `
        UPDATE g_max
        SET ${setString}
        WHERE id=${g_max_id}
        RETURNING *;
        `,
      Object.values(fields)
    );
    return g_max;
  } catch (error) {
    throw error;
  }
}

// delete g_max by id
async function deleteG_maxById(g_max_id) {
  try {
    const {
      rows: [g_max],
    } = await client.query(`
        DELETE FROM g_max
        WHERE g_max_id =${g_max_id};
        RETURNING *;
        `);
    return g_max;
  } catch (error) {
    throw error;
  }
}

// delete all g_max
async function deleteAllG_max() {
  try {
    const { rows } = await client.query(`
        DELETE FROM g_max;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
}

// export functions
module.exports = {
  getAllG_max,
  getG_maxById,
  createG_max,
  createG_maxData,
  updateG_maxById,
  deleteG_maxById,
  deleteAllG_max,
};
