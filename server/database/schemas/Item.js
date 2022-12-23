//* Each product is an individual item that is being sold. An individual SKU.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  description: String,
  image_urls: Array,
  price: Number,
  quantity_available: Number,
  can_be_ordered_without_stock: Boolean,
  pickup_available: Boolean,
  delivery_available: Boolean,
  shipping_available: Boolean,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;