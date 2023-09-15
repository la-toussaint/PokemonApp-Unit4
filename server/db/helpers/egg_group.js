const client = require("../client");
const { egg_group } = require("../seedData");

async function createEgg_group({ pokename, egg_group }) {
  try {
    const {
      rows: [row],
    } = await client.query(
      `
		  INSERT INTO row(pokename, egg_group)
		  VALUES($1, $2)
		  RETURNING *;
		`,
      [pokename, egg_group]
    );
    return egg_group;
  } catch (error) {
    throw error;
  }
}

module.exports = { createEgg_group };
