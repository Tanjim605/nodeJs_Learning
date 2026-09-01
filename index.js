// const Database = require('better-sqlite3')
import Database from 'better-sqlite3';

const db = new Database('database.db')
// this code above is creating a file named 'database.db' if there was none

console.log('database is connected')

// console.log('db: ', db)
/*
  ei db console korle vetore ekta Database namer object ache.

  db:  Database {
    name: 'database.db',
    open: true,
    inTransaction: false,
    readonly: false,
    memory: false
  }

*/

// creating table:
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone number
  )
`)

console.log("Users table is ready!");

// ****** inserting user
const insertUser = db.prepare(`
  INSERT INTO users (name, email, phone)
  VALUES (?, ?, ?)
`);

// insertUser.run("Alice", "alice@example.com", '0184567890');
// insertUser.run("Tanjim", "mail@gmail.com", "0184567890")
// insertUser.run("Peter Parker", "spidey@gmail.com", "0184567890")

// console.log("User inserted!");


// ****** reading 
const users = db.prepare(`
  SELECT * FROM users
`).all();

// console.log(users);

// ****** update
const updateUser = db.prepare(`
  UPDATE users
  SET email = ?
  WHERE id = ?
`);

// updateUser.run("tanjim@example.com", 1);

// console.log("User updated!");

// conditional search for id == 1
const users2 = db.prepare(`
  SELECT * FROM users
  WHERE id = 1
`).all();

// console.log(users2);

// ****** delete user
const deleteUser = db.prepare(`
  DELETE FROM users
  WHERE id = ?
`);

// deleteUser.run(3);

// console.log("User deleted!");
