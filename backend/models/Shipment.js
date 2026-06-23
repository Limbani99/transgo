const mongoose = require("mongoose");

const ShipmentSchema = new mongoose.Schema(
    {
        companyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        pickupInformation: {
            address: {
                type: String,
                required: true,
            },
            personName: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
        },

        deliveryInformation: {
            address: {
                type: String,
                required: true,
            },
            personName: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
        },

        productInformation: {
            productName: {
                type: String,
                required: true,
            },
            productCategory: {
                type: String,
                required: true,
            },
            productWeight: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            productDescription: {
                type: String,
            },
        },

        status: {
            type: String,
            enum: [
                "pending",
                "accepted",
                "picked_up",
                "in_transit",
                "delivered",
                "cancelled",
            ],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Shipment", ShipmentSchema);