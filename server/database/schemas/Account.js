//* Each account will eventually need multiple users to access the same account.

const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = new Schema({
  name: String,
  about_description: String,
  seller_account: Boolean,
  buyer_account: Boolean,
  wholesale_buyer: Boolean,
  ein_number: String,
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
