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
            id_fromuser INTEGER,
            content TEXT NOT NULL
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        comments(
            id INTEGER PRIMARY KEY,
            if_frompost INTEGER,
            content TEXT NOT NULL
        )
`)

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        friends(
            id INTEGER PRIMARY KEY,
            id_friendof INTEGER,
            name TEXT NOT NULL

        )
`)