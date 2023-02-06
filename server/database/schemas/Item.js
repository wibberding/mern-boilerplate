//* Each product is an individual item that is being sold. An individual SKU.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String,
  user: String, //* user_id
  description: String,
  image_urls: Array,
  price: Number,
  quantity_available: Number,
  can_be_ordered_without_quantity_available: Boolean,
  pickup_available: Boolean,
  delivery_available: Boolean,
  shipping_available: Boolean,
  shipping_height: Number, // For shipping calculations in inches
  shipping_width: Number, // For shipping calculations in inches
  shipping_length: Number, // For shipping calculations in inches
  shipping_weight: Number, // For shipping calculations, in ounces.
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
