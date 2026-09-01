// const Database = require('better-sqlite3')
import Database from 'better-sqlite3'

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