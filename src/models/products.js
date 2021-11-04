const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: { type: String, default: null, require:true },
    description: { type: String, default: null,require:true },
    category: { type: String, default: null, maxLength: 100,require:true },
    stock:{ type:Number, default: null, require:true},
    price: { type: Number, default: 0,require:true },
    image: { type: String, default: null, maxLength: 300,require:true },
    slug:{type: String, default: null, maxLength:30}
});

module.exports = mongoose.model('Product', ProductSchema, 'Products');
