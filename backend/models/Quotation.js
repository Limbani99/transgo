const mongoose = require('mongoose')

const quotationSchema = new mongoose.Schema({
    shipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['pending', 'sent', 'accepted', 'rejected'],
        default: 'pending'
    },
    // Basic Info
    distanceCost: {
        type: Number,
        required: true
    },
    fuelCharges: {
        type: Number,
        required: true
    },
    tollCharges: {
        type: Number,
        required: true
    },
    vehicleCharges: {
        type: Number,
        required: true
    },
    insuranceCharges: {
        type: Number,
    },
    gstPercent: {
        type: Number,
    },
    total: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('Quotation', quotationSchema)

