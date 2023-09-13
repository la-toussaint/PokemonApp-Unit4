const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { createServer: createViteServer } = require('vite');
// const { createServer } = require('http');
// const { createProxyMiddleware } = require('http-proxy-middleware'); // If you're using proxy middleware
const client = require("./db/client");
const router = require("./API/index");

const app = express();


const { authRequired } = require('./API/utils')
const client = require('./db/client')

require('dotenv').config()

client.connect()








// let viteServer;

// async function createDevServer() {
//   const viteServer = await createViteServer({
//     server: {
// 		middlewareMode: true, // Set middlewareMode to true
// 		appType: 'custom',
//     },
//   });

//   // Apply Vite's middlewares to the Express app
//   app.use(viteServer.middlewares);

// Initialize middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

// If you're using proxy middleware, apply it here as well
app.use('/api', router)
  //   createProxyMiddleware({ target: `http://localhost:${PORT}` }));

  // Call the createDevServer function
  // createDevServer().then(() => {
  // Start the Express server
  //   const server = createServer(app);

// });


app.get('/test', authRequired, (req, res, next) => {
	res.send('You are authorized')
  })
  
  app.get('*', (req, res, next) => {
	res.status(404).send('Uh oh, what r u looking for?')
  })
  
  app.use((error, req, res, next) => {
	res.status(500).send(error)
  })
  

app.get("/", (req, res) => {
  // try {
  //   let html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

  //   // Transform HTML using Vite plugins.
  //   html = await viteServer.transformIndexHtml(req.url, html);

  res.send("Hello World!");
  // } catch (e) {
  //   return next(e);
  // }
});

module.exports = app// Router: /api
