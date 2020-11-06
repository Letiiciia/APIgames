const express = require('express');

const app = express();

const cors = require('cors');

const database = require('./model/repository-games');
database.connect()

const games = require('./route/route-games');

app.use(cors());
app.use(express.json());
app.use('/', games);

module.exports = app;