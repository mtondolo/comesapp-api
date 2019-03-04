const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

const NewsItemSchema = new Schema({
    headline: { type: String, required: true },
    story: [{ type: String, required: true }],
    storyUrl: { type: mongoose.SchemaTypes.Url, required: true },
    imageUrl: { type: mongoose.SchemaTypes.Url, required: true },     
});

// Get datetime stamp from objectid
NewsItemSchema.virtual('created_At').get( function () { 
    return this._id.getTimestamp().getTime();
  });

  // Set the result to JSON
  NewsItemSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('NewsItem', NewsItemSchema);