import os from 'os'
const p = os.homedir + '/tmp/dist/test.db3'
console.log(p)

// import Database from 'better-sqlite3'
import { Database } from './loadreq.js'

const db = Database(p)
const row = db.prepare('SELECT * FROM users WHERE id = ?').get(1)
console.log(row.id, row.name)

// import { LoggingWinston } from '@google-cloud/logging-winston'

/* 
CREATE TABLE "users" (id"	INTEGER, "name"	TEXT,	PRIMARY KEY("id"));
insert into users (id, name) values (1, 'Daniel'), (2, 'Bill');
*/

import express from 'express'
const app = express()

app.get('/', function (req, res) {
   res.send('Hello World');
})

const server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port  
   console.log("Example app listening at http://%s:%s", host, port)
})
