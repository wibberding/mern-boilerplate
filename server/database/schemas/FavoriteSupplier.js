//* A join table to keep track of a buyer's favorite suppliers.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSupplierSchema = new Schema({
  supplier_id: String,
  buyer_id: String,
});

const FavoriteSupplier = mongoose.model('FavoriteSupplier', favoriteSupplierSchema);

module.exports = FavoriteSupplier;
