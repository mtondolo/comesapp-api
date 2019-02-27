const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

const NewsItemSchema = new Schema({
    headline: { type: String, required: true },
    story: [{ type: String, required: true }],
    storyUrl: { type: mongoose.SchemaTypes.Url, required: true },    
    imageUrl: { type: mongoose.SchemaTypes.Url, required: true },
    created_at: { type: Date},
    updated_at: { type: Date}      
});

NewsItemSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });

module.exports = mongoose.model('NewsItem', NewsItemSchema);