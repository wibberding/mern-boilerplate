//* Each delivery method is a way the customer can receive their order.
//* This may be a place, a delivery area and time, or a shipping method.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const deliveryMethodSchema = new Schema({
  method: String, //* local, route, or ship
  name: String,
  instructions: String,
  processing_fee: Number,
  delivery_fee: Number,
  geofence: Array, //! Not sure the data structure needed here
  times: Date, //* Maybe array of dates?
  carrier: String, //* For shipping option
  processing_time: Number, //* In business days for shipping
});

const DeliveryMethod = mongoose.model('DeliveryMethod', deliveryMethodSchema);

module.exports = DeliveryMethod;
