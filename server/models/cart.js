const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
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
            default: true
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

module.exports = mongoose.model('Cart', cartSchema);