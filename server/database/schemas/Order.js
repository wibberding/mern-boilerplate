//* To track each order that is placed.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  buyer: String,
  seller: String,
  Items: //* Populate by searching for DeliveryItems that have this order ID

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
