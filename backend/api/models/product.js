const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: ['Electronics', 'Beauty', 'Clothing', 'Home and Kitchen', 'Miscellaneous'],
        required: true
    },
    image: { type: String, required: true } ,
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);
