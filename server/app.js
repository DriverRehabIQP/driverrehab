// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const parts = require('./routes/api/Parts');

const app = express();
const bodyParser = require('body-parser');

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

//tests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/parts', parts);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
