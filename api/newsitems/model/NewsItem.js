const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

const NewsItemSchema = new Schema({
    headline: { type: String, required: true },
    story: [{ type: String, required: true }],
    storyUrl: { type: mongoose.SchemaTypes.Url, required: true },
    imageUrl: { type: mongoose.SchemaTypes.Url, required: true },   
        
});

NewsItemSchema.virtual('created').get( function () {
    if (this['_id']) return this['_id'];
    return this['_id'] = this._id.getTimestamp();
  });

module.exports = mongoose.model('NewsItem', NewsItemSchema);