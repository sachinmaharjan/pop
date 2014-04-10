'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    timestamps = require('mongoose-timestamp');

var LocationSchema = new Schema({
  quickTitle: String,
  type: String,
  descriptionText: String,
  address: String,
  accomodates: String,
  rooms: String,
  bathrooms: String,
  price: { type: Number, default: 0},
  hours: { type: Number, default: 0},
  amenities: String,
  filepickerUrl: String,
  user: Schema.ObjectId,
  featured: Boolean,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  country: { type: String, default: 'US'},
  tags: [ {type: String} ]
}, {
  toObject: {
    virtuals: true
  }
});
LocationSchema.plugin(timestamps);

var Location = mongoose.model('Location', LocationSchema);
module.exports = Location;
