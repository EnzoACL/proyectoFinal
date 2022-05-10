import sqlite3 from "sqlite3"

export const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('Conected to the sport socialmedia database')
});

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        users(
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            password TEXT NOT NULL
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        posts(
            id INTEGER PRIMARY KEY,
            idfromuser INTEGER,
            FOREIGN KEY(idfromuser) REFERENCES users(id),
            content TEXT NOT NULL
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        comments(
            id INTEGER PRIMARY KEY,
            idfrompost INTEGER,
            FOREIGN KEY(idfrompost) REFERENCES posts(id),
            content TEXT NOT NULL
        )
`)

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        friends(
            request_user INTEGER,            
            FOREIGN KEY (request_user) REFERENCES users(id),
            confirm_user INTEGER,
            FOREIGN KEY(confirm_user) REFERENCES users(id),
            confirmed FALSE
        )
`)

export default db;