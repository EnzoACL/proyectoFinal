import sqlite3 from "sqlite3"

export const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('Conected to the socialmedia database')
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
            FOREIGN KEY (id_fromuser) REFERENCES users(id)
            content TEXT NOT NULL
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        comments(
            id INTEGER PRIMARY KEY,
            FOREIGN KEY (id_frompost) REFERENCES posts(id)
            content TEXT NOT NULL
        )
`)

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        friends(
            id INTEGER PRIMARY KEY,            
            FOREIGN KEY (id_friendof) REFERENCES users(id)
            name TEXT NOT NULL
        )
`)