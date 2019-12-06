const express = require('express');
const app = express();

const routeHome = require('../app/routes/home');
const routeTeste = require('../app/routes/teste');
const routeUser = require('../app/routes/user');
routeHome(app);
routeTeste(app);
routeUser(app);

module.exports = app;