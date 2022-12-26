//* A Delivery Item belongs to a Delivery
//* Each delivery will have several "Devliery-Items" and items within a delivery.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const deliveryItemSchema = new Schema({
  order_id: String,
  buyer_id: String,
  seller_id: String,
  delivery_id: String,
  item_id: String,
});

const DeliveryItem = mongoose.model('DeliveryItem', deliveryItemSchema);

module.exports = DeliveryItem;
