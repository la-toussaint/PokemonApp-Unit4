const client = require("../client");
const { egg_group } = require("../seedData");

const createEgg_group = async ({ pokename, egg_group }) => {
  try {
    const {
      rows: [egg_group],
      //INSERT SQL query
    } = await client.query(
      // INSERT INTO table(column1, column2, column3)
      // VALUES(var1, var2, var3)
      // RETURNING everything
      `
                INSERT INTO egg_group(pokename, egg_group)
                VALUES($1, $2)
                RETURNING *;
            `
      //Kind of like a dependency array, hooks up the parameters to the dolla dolla variables
   [pokename, egg_group] );
    return egg_group;
  } catch (error) {
    throw error;
  }
};

module.exports = { createEgg_group };
