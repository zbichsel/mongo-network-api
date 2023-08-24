const { connect, connection } = require('mongoose');
require('dotenv').config();


connect(process.env.MONGO_URI);

module.exports = connection;
