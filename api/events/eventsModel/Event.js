const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const EventSchema = new Schema({
    title: { type: String, required: true },
    venue: { type: String, required: true }, 
    email: {type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
      startDate: {type: Date, required: true}   
  });

  // Get start date in milliseconds
  EventSchema.virtual('startDateInMills').get( function () { 
    return this.startDate.getTime();
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