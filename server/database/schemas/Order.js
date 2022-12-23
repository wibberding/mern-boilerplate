//* To track each order that is placed.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  buyer: String,
  seller: String,
  Items: Array,
  //* Items need to include quantity sold, item id, and price in case it changes.

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
