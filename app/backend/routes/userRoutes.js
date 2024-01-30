// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new user
router.post('/users', (req, res) => {
    userController.createUser(req.body, (err, user) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json(user);
        }
    });
});

// Route to get user by username
router.get('/users/:username', (req, res) => {
    userController.findUserByUsername(req.params.username, (err, user) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    });
});

router.get('/users', (req, res) => {
    userController.getAllUsers((err, users) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ users });
        }
    });
});

module.exports = router;
