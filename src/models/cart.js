const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    _id:{ type: String, default: null, require:true},
    product_name: { type: String, default: null, require:true },
    quantity: { type: Number, default: null, require:true},
    price: { type: Number, default: 0,require:true },
});

module.exports = mongoose.model('cart', CartSchema, 'Carts');