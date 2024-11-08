const { createConnection } = require("mysql");
const dbConfig = require("../config/dbConfig");

const connection = createConnection(dbConfig);

module.exports = connection;