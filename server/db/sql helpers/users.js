const client = require("../client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

// user functions
async function createUsers({ name, username, password, fav_pokemon }) {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(name, username, password, fav_pokemon)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `,
      [name, username, hashedPassword, fav_pokemon]
    );
    return user;
  } catch (error) {
    throw error;
  }
}
async function getUsers({ username, password }) {
  if (!username || !password) {
    return;
  }

  try {
    const user = await getUsersByUsername(username);
    if (!user) return;
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordsMatch) return;
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUsersById(user_id) {
  // first get the user
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      SELECT *
      FROM users
	  WHERE user_id =${user_id};
    `
    );
    // if it doesn't exist, return null
    if (!user) return null;
    // if it does:
    // delete the 'password' key from the returned object
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}
async function getUsersByUsername(username) {
  // first get the user
  try {
    const { user } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username =${username};
    `
    );
    // if it doesn't exist, return null
    if (!user || !row.length) return null;
    // if it does:
    // delete the 'password' key from the returned object
    const [row] = row;
    // delete user.password;
    return row;
  } catch (error) {
    console.error(error);
  }
}
module.exports = {
  createUsers,
  getUsers,
  getUsersById,
  getUsersByUsername,
};
