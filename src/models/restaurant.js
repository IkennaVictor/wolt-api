/* eslint-disable import/no-cycle */

const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const restaurantSchema = mongoose.Schema({
    city: { type: String, required: true },
    currency: { type: String, required: true },
    delivery_price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: Number, required: false },
    location: [{ type: Number, required: true }],
    name: { type: String, required: true },
    online: { type: Boolean, required: true },
    tags: [{ type: String, required: true }],
    blurhash: { type: String }
});

restaurantSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Restaurant', restaurantSchema);
