'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Location = mongoose.model('Location'),
    User = mongoose.model('User'),
    Signature = mongoose.model('Signature'),
    ObjectId = mongoose.Schema.ObjectId,
    Q = require('q');

var ObjectId = mongoose.Schema.ObjectId;
/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.addLocation = function(req, res, next) {
  var location = new Location(req.body.location);
  location.user = req.user._id;
  location.save(function(err) {
    if(err) return next(err);
    return res.json(location);
  });
};

exports.getLocation = function(req, res, next) {
  var locationId = req.params.id;
  var locationPromise = Location.findById(locationId, function(err, location) {
    Signature.find({location: location._id}).sort("-_id").limit(20).exec(function(err, signatures) {
      var rawLocation = location.toObject();
      rawLocation.signatures = signatures.map(function(signature) {
        console.log(signature.created_at);
        return signature.toObject();
      });
      res.send(rawLocation);
    });
  });
};


exports.getLocations = function(req, res, next) {
  Location.find({}).sort("-signatureCount").limit(5).exec(function(err, locations) {
    res.send(locations.map(function(location) {
      return location.toObject();
    }));
  });
};
exports.addPostSignature = function(req, res) {

  var signature = new Signature(req.body.signature);
  signature.location = req.params.id;

  Location.findById(req.params.id, function(err, location) {
    location.signatureCount += 1;
    location.save(function(err, location) {
      signature.save(function(err, signature) {
        if (!err) {
          return res.json(signature);
        } else {
          return res.send(err);
        }
      });
    });
  });

};
