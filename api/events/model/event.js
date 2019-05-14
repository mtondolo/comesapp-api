const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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