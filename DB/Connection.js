const mysql = require('mysql2/promise');
const router = require('../routes/auth.routes');

const conn = mysql.createPool(
    {
        "host":"localhost",
        "password":"",
        "user":"root",
        "port":3000,
        "database":"whatsup"
    }
)

module.exports = conn