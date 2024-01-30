const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Provide an absolute path to the database file
const dbPath = path.join(__dirname, 'main.db');

// Connect to the database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database at ' + dbPath);
});

module.exports = db;
