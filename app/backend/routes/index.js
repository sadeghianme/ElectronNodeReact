module.exports = (app) => {
    // Import other route files and set them up here
    // Example: const userRoutes = require('./userRoutes');
    // app.use('/users', userRoutes);

    // You can also define individual routes like this:
    app.get('/api/hello', (req, res) => {
        res.send('Hello World!');
    });

    // More routes can be added here
};
