const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { COOKIE_SECRET } = require("./secrets");
const { authRequired } = require("./API/utils");
const cors = require("cors");
const client = require("./db/client");

const router = require("./API/index");
const app = express();

require("dotenv").config();

client.connect();

app.use(morgan("dev"));
app.use(cookieParser(COOKIE_SECRET));
app.use(express.json());

app.use(cors());

app.use("/api", router);

app.get("/test", authRequired, (req, res, next) => {
  res.send("You are authorized");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res, next) => {
	res.status(404).json({ error: "Uh oh, what r u looking for?" });
});
  
app.use((error, req, res, next) => {
  res.status(500).send(error);
});



module.exports = app; // Router: /api
