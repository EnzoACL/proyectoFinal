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
            content TEXT NOT NULL,
            idfromuser INTEGER,
            FOREIGN KEY(idfromuser) REFERENCES users(id)
            
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        comments(
            id INTEGER PRIMARY KEY,
            content TEXT NOT NULL,
            idfrompost INTEGER,
            FOREIGN KEY(idfrompost) REFERENCES posts(id)
        )
`)

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        friends(
            request_userid INTEGER,            
            confirm_userid INTEGER,
            confirmed FALSE,
            FOREIGN KEY(request_user) REFERENCES users(id),
            FOREIGN KEY(confirm_user) REFERENCES users(id)
            
        )
`)

export default db;