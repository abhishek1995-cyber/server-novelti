var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    countrycode: { type: String, required: true },
    mobile: { type: String, required: true },
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    zipcode: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
