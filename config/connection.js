const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:root@cluster0.nien6ix.mongodb.net/socialMedia');

module.exports = connection;
