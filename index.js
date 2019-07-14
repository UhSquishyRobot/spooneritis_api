const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./api/models/user');
const Riddle = require('./api/models/riddle');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/spooneritis', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/routes');

routes(app);

app.listen(port);
