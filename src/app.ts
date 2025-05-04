// import Database from 'better-sqlite3'
import { Database } from './loadreq.js'

const p = './test.db3'
console.log(p)

const db = new Database(p)
const row = db.prepare('SELECT * FROM users WHERE id = ?').get(1)
console.log(row.id, row.name)

/* 
CREATE TABLE "users" (id"	INTEGER, "name"	TEXT,	PRIMARY KEY("id"));
insert into users (id, name) values (1, 'Daniel'), (2, 'Bill');
*/

