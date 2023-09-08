const client = require('.client');

const createBreeding = async ({pokename,egg_group1, egg_group2,gender,comp_parent}) => {
  try {
    const {
      rows: [breeding],
      //need quotes in the primaryTypeId & secondaryTypeId because psql is picky with camelCase
    } = await client.query(
      `
                INSERT INTO breeding(breeding_id, pokename, egg_group1, egg_group2, gender, comp_parent)
                VALUES($1, $2, $3)
                RETURNING *;
            `,
      //Adding a ternary to secondary in case it's null, we then fill it in with "n/a"
      [pokename, egg_group1, egg_group2 ? egg_group2 : "N/A"]
    );
    return breeding;
  } catch (error) {
    throw error;
  }
};

//Just an example of how you pull in the id to a query - this is not used in the database portion of this project
const getBreedingById = async (breed_id) => {
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
};

module.exports = { createBreeding, getBreedingById };
