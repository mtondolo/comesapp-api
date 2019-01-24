const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsItemSchema = new Schema({
    headline: { type: String, required: true },
    story: { type: String, required: true },
    author: { type: String, required: true }
});

module.exports = mongoose.model('NewsItem', NewsItemSchema);