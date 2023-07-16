const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    sku: {
        type: Number,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        unique: true
    },
    img: {
        type: String,
        required: true,
    }
});

module.exports = model('Product', ProductSchema);