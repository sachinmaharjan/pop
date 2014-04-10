'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    timestamps = require('mongoose-timestamp');
    
/**
 * Petition Schema
 */
var SignatureSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  comments: String,
  petition: Schema.ObjectId
}, {
  toObject: {
    virtuals: true
  }
});

SignatureSchema.plugin(timestamps);

var Signature = mongoose.model('Signature', SignatureSchema);
module.exports = Signature;
