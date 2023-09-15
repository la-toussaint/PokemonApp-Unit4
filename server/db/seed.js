// THIS FILE WILL RESET YOUR DATABASE - PROCEED WITH CAUTION
//pulling in connection to my local database
const client = require("./client");
const { createPoketype_egg } = require("./helpers/poketype_egg");
const { createBreeding } = require("./helpers/breeding");
const { createEgg_group } = require("./sql helpers/egg_group");
const { createG_max } = require("./helpers/g_max");
const { createPokedata } = require("./helpers/pokedata");
const { createUsers } = require("./sql helpers/users");

const {
  poketype_egg,
  breeding,
  egg_group,
  g_max,
  pokedata,
  users,
} = require("./seedData");

//Drop Tables for cleanliness
const dropTables = async () => {
  try {
    console.log("Starting to drop tables");
    await client.query(`
        DROP TABLE IF EXISTS pokedata;
        DROP TABLE IF EXISTS g_max;
		DROP TABLE IF EXISTS egg_group;
        DROP TABLE IF EXISTS poketype_egg;
        DROP TABLE IF EXISTS breeding;
		DROP TABLE IF EXISTS users;
		
        `);
    console.log("Tables dropped!");
  } catch (error) {
    console.log("Error dropping tables");
    throw error;
  }
};

//Create Tables because we need a place for the data to live
const createTables = async () => {
  console.log("Building tables...");
  try {
    await client.query(`
        CREATE TABLE pokedata (
			pokedata_id SERIAL PRIMARY KEY,
           	national_num INTEGER UNIQUE ,
            pokename varchar(255) UNIQUE,
			poketype1 varchar(255) ,
			poketype2 varchar(255) ,
			pokespecies varchar(255),
			height varchar(255) ,
			weight varchar(255) ,
			sign_ability varchar(255) 
			);
			
			CREATE TABLE g_max (
					g_max_id SERIAL PRIMARY KEY,
				    pokename varchar(255) UNIQUE , 
					g_max_move varchar(255) ,
				    g_max_move_type varchar(255),
					b4g_max_image varchar(1024),
					post_g_max_image varchar(1024),
					post_g_max_height varchar(255) 
				);
				
				CREATE TABLE IF NOT EXISTS egg_group (
					egg_group_id SERIAL PRIMARY KEY,
					pokename varchar(255) UNIQUE , 
				    egg_group varchar(255)
				);
				
				CREATE TABLE poketype_egg (
					poketype_id SERIAL PRIMARY KEY,
						pokename varchar(255) UNIQUE , 
						poketype varchar(255) ,
						egg_group varchar(255) 
					);
					
					CREATE TABLE breeding (
							breed_id SERIAL PRIMARY KEY,
						    breeding_id varchar(255)  , 
						    pokename varchar(255) UNIQUE , 
							egg_group1 varchar(255) ,
							egg_group2 varchar(255) ,
							gender varchar(255) ,
							comp_parent varchar(255) 
						);
						
						CREATE TABLE users (
							user_id SERIAL PRIMARY KEY,
							name varchar(255)  , 
						    username varchar(255) UNIQUE , 
						    password varchar(255) ,
							fav_pokemon varchar(255) 
						);`);

    console.log("Tables built!");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};

//Insert mock data from seedData.js
//Create trainers
const createInitialPoketype_egg = async () => {
  try {
    //Looping through the "trainers" array from seedData
    //Insert each trainer into the table
    for (const egg of poketype_egg) await createPoketype_egg(egg);
  } catch (error) {
    throw error;
  }
};

const createInitialPokedata = async () => {
  try {
    //Looping through the "trainers" array from seedData
    //Insert each trainer into the table
    for (const data of pokedata)
      await createPokedata(data), console.log("created pokedata");
  } catch (error) {
    throw error;
  }
};

const createInitialG_max = async () => {
  try {
    //Looping through the "trainers" array from seedData
    //Insert each trainer into the table
    for (const gmax of g_max)
      await createG_max(gmax), console.log("created g_max");
  } catch (error) {
    throw error;
  }
};

const createInitialEgg_group = async () => {
  try {
    //Looping through the "trainers" array from seedData
    //Insert each trainer into the table
    for (const group of egg_group)
      await createEgg_group(group), console.log("created egg_group");
  } catch (error) {
    throw error;
  }
};

const createInitialBreeding = async () => {
  try {
    //Looping through the "trainers" array from seedData
    //Insert each trainer into the table
    for (const breeder of breeding)
      await createBreeding(breeder), console.log("created breeding");
  } catch (error) {
    throw error;
  }
};

const createInitialUsers = async () => {
  try {
    //Looping through the "trainers" array from seedData
    //Insert each trainer into the table
    for (const user of users) await createUsers(user), console.log("created users");
  } catch (error) {
    throw error;
  }
};

//Call all my functions and 'BUILD' my database

const rebuildDb = async () => {
  try {
    // ACTUALLY connect to my local database
    client.connect();
    // Run our functions
    await dropTables();
    await createTables();

    // Generating starting data
    console.log("starting to seed...");
    await createInitialPoketype_egg();
    await createInitialPokedata();
    await createInitialUsers();

      await createInitialEgg_group();
    // Create the egg_group table (even if it exists)
    await client.query(`
		CREATE TABLE IF NOT EXISTS egg_group (
		  egg_group_id SERIAL PRIMARY KEY,
		  pokename VARCHAR(255) UNIQUE,
		  egg_group VARCHAR(255)
		);
	  `);

    await createInitialG_max();
    await createInitialBreeding();
  } catch (error) {
    console.error(error);
  } finally {
    // close our connection
    client.end();
  }
};

rebuildDb();
