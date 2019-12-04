const express = require('express');
app = express();

const rotas = require('../app/routes/routes');
rotas(app);

module.exports = app;