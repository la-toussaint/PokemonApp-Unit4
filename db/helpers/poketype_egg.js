const client = require("./client");
const { poketype_egg } = require('./seedData');

const createPoketype_egg = async ({ pokename, poketype, egg_group }) => {
  try {
    const {
      rows: [poketype_egg],
      //INSERT SQL query
    } = await client.query(
      // INSERT INTO table(column1, column2, column3)
      // VALUES(var1, var2, var3)
      // RETURNING everything
      `
                INSERT INTO poketype_egg(pokename, poketype, egg_group)
                VALUES($1, $2, $3)
                RETURNING *;
            `,
      //Kind of like a dependency array, hooks up the parameters to the dolla dolla variables
      [pokename, poketype, egg_group]
    );
    return poketype_egg;
  } catch (error) {
    throw error;
  }
};

const getPoketype_eggById = async (poketype_egg_id) => {
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
};

module.exports = { createPoketype_egg, getPoketype_eggById };
