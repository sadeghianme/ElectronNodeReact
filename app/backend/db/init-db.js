// backend/db/init-db.js

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const createUserTable = require('./schema/user');

// Path to where you want to store the database file
const dbPath = path.resolve(__dirname, 'main.db');

// Create a new database if it doesn't exist, or open it if it does
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
        createUserTable(db);
    }
});

module.exports = db;
