const mySql = require('mysql2');

const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '8375099653'

});

modeule.exports = pool.promise();