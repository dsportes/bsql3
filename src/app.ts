const p = './test.db3'
console.log(p)

// import Database from 'better-sqlite3'
// KO après build - Cannot read properties of undefined (reading 'indexOf')

import { Database } from '../loadreq.js' // OK

const db = Database(p)
const row = db.prepare('SELECT * FROM users WHERE id = ?').get(1)
console.log(row.id, row.name)

/* 
CREATE TABLE "users" (id"	INTEGER, "name"	TEXT,	PRIMARY KEY("id"));
insert into users (id, name) values (1, 'Daniel'), (2, 'Bill');
*/

