const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
    tripType: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    imageURL: {
        type: String, //placeholder - this will eventually be an AWS link 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    extLink: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
})

module.exports = Pin = mongoose.model('Pin', PinSchema);