// backend/controllers/userController.js

const db = require('../db/database.js'); // Update with the correct path to your database file

const bcrypt = require('bcrypt');
const saltRounds = 10;
const createUser = (user, callback) => {
    const { username, password, firstName, lastName, role } = user;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            return callback(err);
        }
        const query = `INSERT INTO user (username, password, first_name, last_name, role) VALUES (?, ?, ?, ?, ?)`;
        db.run(query, [username, hash, firstName, lastName, role], function(err) {
            callback(err, { id: this.lastID });
        });
    });
};

const findUserByUsername = (username, callback) => {
    const query = `SELECT * FROM user WHERE username = ?`;

    db.get(query, [username], (err, row) => {
        if (row) {
            delete row.password;
        }
        callback(err, row);
    });
};

const getAllUsers = (callback) => {
    const query = `SELECT * FROM user`;

    db.all(query, [], (err, rows) => {
        rows.forEach(x => delete x.password);
        callback(err, rows);
    });
};

// Export the controller functions
module.exports = {
    createUser,
    findUserByUsername,
    getAllUsers
    // other user-related functions
};
