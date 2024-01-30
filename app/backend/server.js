const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes'); // Import user routes

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

// Require your routes into the application.
require('./routes')(app);

// Setup a default catch-all route
app.get('/test', (req, res) => res.status(200).send({
    message: 'This is the backend server for the NodeDesktopApp.',
}));

module.exports = app;
