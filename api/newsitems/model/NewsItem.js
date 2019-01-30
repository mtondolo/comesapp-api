const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

const NewsItemSchema = new Schema({
    headline: { type: String, required: true },
    story: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: mongoose.SchemaTypes.Url, required: true }      
});

module.exports = mongoose.model('NewsItem', NewsItemSchema);