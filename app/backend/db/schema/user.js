// backend/db/schema/user.js

const createUserTable = (db) => {
    db.run(`
        CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            first_name TEXT,
            last_name TEXT,
            role TEXT CHECK( role IN ('Admin', 'Employee') ) NOT NULL DEFAULT 'Employee',
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            updated_at TEXT NOT NULL DEFAULT (datetime('now'))
            )
    `, (err) => {
        if (err) {
            console.error("Error creating 'user' table", err);
        } else {
            console.log("'user' table created");
        }
    });
};

module.exports = createUserTable;
