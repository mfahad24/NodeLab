var pg = require("pg");

var pool = new pg.Pool({
user: "postgres",
password: "Fahad1234",
host: "localhost",
port: 5432,
database: "ToDoDB",
ssl: false
});

module.exports = pool;
