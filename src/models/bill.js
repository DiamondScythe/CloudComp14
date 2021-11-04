const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    detail: {},
    date: { type: Date, default: null, require:true },
    price: { type: Number, default: 0,require:true },
});

module.exports = mongoose.model('bill', BillSchema, 'Bills');