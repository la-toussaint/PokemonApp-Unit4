// Require Client from pg
const { Client } = require('pg')

// const cors = require('cors')
// app.use(cors());


//Establishing connect to database (like how we do with http://)
const server = 'pokedex'
const client = new Client(`postgres://localhost:5432/${server}`)

// client = require('./db/client');
// client.connect();

//Export for use in other files
module.exports = client