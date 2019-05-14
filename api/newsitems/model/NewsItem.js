const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

// Schema for news
const NewsItemSchema = new Schema({
    headline: { type: String, required: true },
    story: [{ type: String, required: true }],
    storyUrl: { type: mongoose.SchemaTypes.Url, required: true },
    imageUrl: { type: mongoose.SchemaTypes.Url, required: true },
    imageDescription: { type: String, required: false},     
});

// Get datetime stamp from objectid in milliseconds
NewsItemSchema.virtual('created_At').get( function () { 
    return this._id.getTimestamp().getTime();
  });

  // Set the result to JSON
  NewsItemSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('NewsItem', NewsItemSchema);

 




