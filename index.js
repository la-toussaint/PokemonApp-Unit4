
const express = require('express');
const app = express();
const PORT = 8080;

// init morgan
const morgan = require('morgan');
app.use(morgan('dev'));

// init body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// init cors
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Router: /api
app.use('/API', require('./API/index'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
