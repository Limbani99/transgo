const usermodel = require('../../models/User')
const shipmentmodel = require('../../models/Shipment')

const createShipment = async (req, res) => {
    try {
        const { pickupInformation, deliveryInformation, productInformation } = req.body;
        const newShipment = new shipmentmodel({ pickupInformation, deliveryInformation, productInformation });
        await newShipment.save();
        res.status(201).json({ message: "Shipment created successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};