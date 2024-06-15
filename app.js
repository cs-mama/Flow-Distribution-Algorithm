const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const logger = require('./logger');

const app = express();
app.use(bodyParser.json());
app.use(logger);
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
