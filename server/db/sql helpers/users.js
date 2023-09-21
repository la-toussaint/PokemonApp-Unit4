const client = require("../client");

// user functions
const createUsers = async ({ name, username, password, fav_pokemon }) => {
  const {
    rows: [user],
  } = await client.query(
    `
			  INSERT INTO users(name, username, password, fav_pokemon)
			  VALUES ($1, $2, $3, $4)
			  RETURNING *
		  `,
    [name, username, password, fav_pokemon]
  );
  return user;
};

const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
			SELECT *
			FROM users;
			`);
    console.log("rows: ", rows);
    return rows;
  } catch (error) {
    throw error;
  }
};

async function getUsersById(user_id) {
  // first get the user
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT * 
	FROM users
	WHERE users.user_id = $1;
    `[user_id]
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

const getUsersByUsername = async (username) => {
  console.log("username: ", username);
  const {
    rows: [user],
  } = await client.query(
    `
		SELECT * 
		FROM users
		WHERE users.username = $1
		`,
    [username]
  );
  console.log("user: ", user);
  return user;
};

module.exports = {
  createUsers,
  getAllUsers,
  getUsersById,
  getUsersByUsername,
};
