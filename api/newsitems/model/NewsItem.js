const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsItemSchema = new Schema({
    headline: { type: String, required: false },
    story: { type: String, required: false },
    author: { type: String, required: false },
    image: { type: String, required: false }   
});

module.exports = mongoose.model('NewsItem', NewsItemSchema);