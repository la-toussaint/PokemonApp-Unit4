const client = require('./client');
const util = require('util');

async function getAllPokedata() {
    try {
        const { rows } = await client.query(`
        SELECT *
        FROM pokedata;
        `);
        return rows;
    } catch (error) {
        throw error;
    }
}

// get pokedata by id
async function getPokedataById(pokedata_id) {
	try {
		const {rows: [pokedata] } = await client.query(
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
	  }
	  

// create new pokedata
async function createPokedataData( { national_num, pokename, poketype1, poketype2, pokespecies, height, weight, sign_ability }) {
    try {
        const { rows: [pokedata] } = await client.query(`
        INSERT INTO pokedata(national_num, pokename, poketype1, poketype2, pokespecies, height, weight, sign_ability)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *;
        `,    [pokename, poketype1, poketype2 ? poketype2: "N/A"],
		
		[national_num, pokename, poketype1, poketype2, pokespecies, height, weight, sign_ability]);
        return pokedata;
    } catch (error) {
        throw error;
    }
}

// add new pokedata
async function createPokedata({ national_num, pokename, poketype1, poketype2, pokespecies, height, weight, sign_ability }) {

    try {
        const { rows: [pokedata] } = await client.query(`
        INSERT INTO pokedata(national_num, pokename, poketype1, poketype2, pokespecies, height, weight, sign_ability)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
        `, [pokename, poketype1, poketype2 ? poketype2: "N/A"],
		[national_num, pokename, poketype1, poketype2, pokespecies, height, weight, sign_ability]);
        return pokedata;
    } catch (error) {
        throw error;
    }
}

// update pokedata by id
async function updatePokedataById(pokedata_id, fields = {}) {
    // build the set string
    const setString = Object.keys(fields).map(
        (key, index) => `"${key}"=$${index + 1}`
    ).join(', ');

    // return early if this is called without fields
    if (setString.length === 0) {
        return;
    }

    try {
        const { rows: [pokedata] } = await client.query(`
        UPDATE pokedata
        SET ${ setString }
        WHERE id=${ pokedata_id }
        RETURNING *;
        `, Object.values(fields));
        return pokedata;
    } catch (error) {
        throw error;
    }
}

// delete pokedata by id
async function deletePokedataById(pokedata_id) {
    try {
        const { rows: [pokedata] } = await client.query(`
        DELETE FROM pokedata
        WHERE pokedata_id =${pokedata_id};
        RETURNING *;
        `
		)
        return pokedata;
    } catch (error) {
        throw error;
    }
}

// delete all pokedata
async function deleteAllPokedata() {
    try {
        const { rows } = await client.query(`
        DELETE FROM pokedata;
        `);
        return rows;
    } catch (error) {
        throw error;
    }
}

// export functions
module.exports = {
    getAllPokedata,
    getPokedataById,
    createPokedata,
    createPokedataData,
    updatePokedataById,
    deletePokedataById,
    deleteAllPokedata}