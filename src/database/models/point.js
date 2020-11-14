const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    coordinates: {
        type: [Number],
        index: '2d',
        required: true
    }
})

module.exports = mongoose.model('Point', PointSchema)


