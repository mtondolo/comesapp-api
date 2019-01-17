const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    company: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);