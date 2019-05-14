const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

// Schema for events
const EventSchema = new Schema({
    title: { type: String, required: true },
    venue: { type: String, required: true },    
  });
  
  // Get datetime stamp from objectid in milliseconds
  EventSchema.virtual('created_At').get( function () { 
    return this._id.getTimestamp().getTime();
  });
  
  // Set the result to JSON
  EventSchema.set('toJSON', {
    virtuals: true
  });

  module.exports = mongoose.model('Event', EventSchema);