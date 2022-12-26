//* Each delivery method is a way the customer can receive their order.
//* This may be a place, a delivery area and time, or a shipping method.
//* Each pick up time needs it's own delivery method.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const deliveryMethodSchema = new Schema({
  method: String, //* local, route, or ship
  name: String,
  instructions: String,
  processing_fee: Number,
  delivery_fee: Number,
  geofence: Array, //! Not sure the data structure needed here
  time: Date, //* Maybe array of dates?
  carrier: String, //* For shipping option
  processing_time: Number, //* In business days for shipping
  shipping_quote_if_shipped: String, //* shipping costs will vary with weight, etc
});

const DeliveryMethod = mongoose.model('DeliveryMethod', deliveryMethodSchema);

module.exports = DeliveryMethod;
