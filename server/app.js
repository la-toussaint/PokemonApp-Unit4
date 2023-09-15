const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const { COOKIE_SECRET } = require('./secrets')

const { authRequired } = require('./API/utils')

const router = require("./API/index");

const app = express();

// const { authRequired } = require('./API/utils')


require('dotenv').config()

const client = require("./db/client");
client.connect()


app.use(morgan('dev'))
app.use(cookieParser(COOKIE_SECRET))
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());




app.get("/", (req, res) => {
app.use('/api', router)


app.get('/test', authRequired, (req, res, next) => {
	res.send('You are authorized')
  })
  
  app.get('*', (req, res, next) => {
	res.status(404).send('Uh oh, what r u looking for?')
  })
  
  app.use((error, req, res, next) => {
	res.status(500).send(error)
  })
  

  res.send("Hello World!");
  // } catch (e) {
  //   return next(e);
  // }
});

module.exports = app// Router: /api
