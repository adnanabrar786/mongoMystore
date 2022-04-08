const mongoose = require('mongoose');
const connection  = require('../util/database');

const customer = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Customer = connection.model('Customer', customer);

module.exports = Customer;