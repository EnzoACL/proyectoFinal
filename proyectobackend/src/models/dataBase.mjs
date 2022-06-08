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
            password TEXT NOT NULL,
            isgroup BOOLEAN DEFAULT FALSE NOT NULL

        )
`);
//Introducir campo DATETIME para poder hacer el feed
db.run(`
    CREATE TABLE
        IF NOT EXISTS
        posts(
            id INTEGER PRIMARY KEY,
            content TEXT NOT NULL,
            idfromuser INTEGER,
            FOREIGN KEY(idfromuser) REFERENCES users(id),
            timeposted INTEGER
            
            
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        comments(
            id INTEGER PRIMARY KEY,
            content TEXT NOT NULL,
            idfrompost INTEGER,
            idfromusercomment INTEGER,
            FOREIGN KEY(idfrompost) REFERENCES posts(id),
            FOREIGN KEY (idfromusercomment) REFERENCES users(id)
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        friends(
            request_userid INTEGER,            
            confirm_userid INTEGER,
            confirmed BOOLEAN DEFAULT false NOT NULL,
            FOREIGN KEY(request_userid) REFERENCES users(id),
            FOREIGN KEY(confirm_userid) REFERENCES users(id)
            
        )
`);

export default db;