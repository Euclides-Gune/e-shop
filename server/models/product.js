const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        cart: {
            type: Boolean,
            default: false
        },
        price: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        cloudinary_id: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);