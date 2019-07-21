const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('./api/middleware/jwt');
const errorHandler = require('./api/middleware/errorHandler');

const User = require('./api/models/user');
const Riddle = require('./api/models/riddle');
const Answer = require('./api/models/answer');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/spooneritis';

mongoose.connect(dbUri, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(jwt());
app.use(errorHandler);

const routes = require('./api/routes/routes');

routes(app);

app.listen(port);
