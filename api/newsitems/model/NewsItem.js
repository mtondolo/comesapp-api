const mongoose = require('mongoose');
require('mongoose-type-url');
const createdPlugin = require('mongoose-plugin-created');
const Schema = mongoose.Schema;

const NewsItemSchema = new Schema({
    headline: { type: String, required: true },
    story: [{ type: String, required: true }],
    storyUrl: { type: mongoose.SchemaTypes.Url, required: true },   
    imageUrl: { type: mongoose.SchemaTypes.Url, required: true },        
});

NewsItemSchema.plugin(createdPlugin);

module.exports = mongoose.model('NewsItem', NewsItemSchema);