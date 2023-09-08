My server app runs with node v20 and I try to use only ES6 modules (not CommonJS ones), supposing that becomes the future sandard.

So in my app.js module:

    import Database from 'better-sqlite3'
    // import { Database } from './loadreq.js'
    const db = Database(p)
    ...

It works. Just run: "npm run start"

Then I tried to build it with webpack. "npn run build"

In webpack.config.mjs I have an "externals" config:

    externals: {
      // 'better-sqlite3': 'commonjs better-sqlite3' // Cannot find module 'better-sqlite3'
      // without the line above: TypeError: Cannot read properties of undefined (reading 'indexOf')
    }

Without "externals" configuration. When running "npm run test", I get:

Cannot read properties of undefined (reading 'indexOf')  

After reading few topics I added the line 'better-sqlite3': 'commonjs better-sqlite3'

"npn run build" and then "npm run test", I get: 

Cannot find module 'better-sqlite3' 

which is normal, the better-sqlite3 module being excluded.

I have no solution for having an app packed with webpack using better-sqlite3 ES6.

So in my app.js module I change for using CommonJs invocation:

    // import Database from 'better-sqlite3'
    import { Database } from './loadreq.js'
    const db = Database(p)
    ...
    loadreq.js: 
    import { createRequire } from 'module'
    const require = createRequire(import.meta.url)
    export const Database = require('better-sqlite3')

Everything is OK.

Why using ES6 style causes troubles to Webpack and not CommonJs style ?

Any idea or workaround ?
