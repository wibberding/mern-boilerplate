//* A Delivery is a set of items from an order being delivered through a certain delivery method.
//* There many be multiple deliveries per order.
//* Each delivery will have several "Devliery-Items" and items within a delivery.
//* A delivery can be a local pickup, a local route delivery, or a shipment.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const deliverySchema = new Schema({
  order_id: String,
  buyer_id: String,
  seller_id: String,
  delivery_method_id: String,
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
