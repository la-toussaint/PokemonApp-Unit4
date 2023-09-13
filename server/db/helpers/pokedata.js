const client = require("../client");
const { pokedata } = require('../seedData');

const createPokedata = async ({national_num, pokename, poketype1, poketype2, pokespecies, height, weight, sign_ability}) => {
  try {
    const {
      rows: [pokedata],
      //need quotes in the primaryTypeId & secondaryTypeId because psql is picky with camelCase
    } = await client.query(
      `
                INSERT INTO pokedata(national_num, pokename, poketype1, poketype2, pokespecies, height, weight, sign_ability)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8)
                RETURNING *;
            `,
      //Adding a ternary to secondary in case it's null, we then fill it in with "n/a"
	  [national_num, pokename, poketype1, poketype2 ? poketype2 : "N/A", pokespecies, height, weight, sign_ability]
    );
    return pokedata;
  } catch (error) {
    throw error;
  }
};

//Just an example of how you pull in the id to a query - this is not used in the database portion of this project
const getPokedataById = async (pokedata_id) => {
  try {
    const {
      rows: [pokedata],
    } = await client.query(
      `
                SELECT *
                FROM pokedata
                WHERE pokedata_id =${pokedata_id};
            `
    );
    return pokedata;
  } catch (error) {
    throw error;
  }
};

module.exports = { createPokedata, getPokedataById };
