const mongoose = require('mongoose');
const connection  = require('../util/database');
const Customer = require('./customer');

const order = new mongoose.Schema({
  total: {
    type: Number,
    required: true
  },
  customer_id: {
    type: mongoose.Schema.ObjectId,
    ref: Customer,
    required: true,
    index: true
  }
});

const Order = connection.model('Order', order);

module.exports = Order;