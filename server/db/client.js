// Require Client from pg
const { Client } = require('pg')
// const express = require('express');
// const app = express();

// const cors = require('cors')
// app.use(cors());

const bcrypt = 'bcrypt'
//Establishing connect to database (like how we do with http://)
const server = 'ryanlynn'
const client = new Client(`postgres://localhost:5432/${server}`)



//Export for use in other files
module.exports = client