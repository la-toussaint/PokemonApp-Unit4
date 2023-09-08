const client = require("./client");

const createG_max = async ({g_max_move, pokename, g_max_move_type, b4g_max_image, post_g_max_image, post_g_max_height}) => {
  try {
    const {
      rows: [g_max],
      //need quotes in the primaryTypeId & secondaryTypeId because psql is picky with camelCase
    } = await client.query(
      `
                INSERT INTO g_max(g_max_move, pokename, g_max_move_type, b4g_max_image, post_g_max_image, post_g_max_height )
                VALUES($1, $2, $3, $4, $5, $6)
                RETURNING *;
            `,
      //Adding a ternary to secondary in case it's null, we then fill it in with "n/a"
      [pokename, g_max_move_type, g_max_move ? g_max_move : "N/A"][
        (pokename, g_max_move, g_max_move_type ? g_max_move_type : "N/A")
      ]
    );
    return g_max;
  } catch (error) {
    throw error;
  }
};

//Just an example of how you pull in the id to a query - this is not used in the database portion of this project
const getG_maxById = async (g_max_id) => {
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
};

module.exports = { createG_max, getG_maxById };
