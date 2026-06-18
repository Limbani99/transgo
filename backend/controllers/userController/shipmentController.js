const Shipment = require("../../models/Shipment");

// Create Shipment
const createShipment = async (req, res) => {
    try {
        const shipment = await Shipment.create(req.body);

        res.status(201).json({
            success: true,
            message: "Shipment created successfully",
            data: shipment,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Shipments
const getAllShipments = async (req, res) => {
    try {
        const shipments = await Shipment.find();

        res.status(200).json({
            success: true,
            count: shipments.length,
            data: shipments,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get Single Shipment
const getShipmentById = async (req, res) => {
    try {
        const shipment = await Shipment.findById(req.params.id);

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found",
            });
        }

        res.status(200).json({
            success: true,
            data: shipment,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Shipment
const updateShipment = async (req, res) => {
    try {
        const shipment = await Shipment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Shipment updated successfully",
            data: shipment,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Delete Shipment
const deleteShipment = async (req, res) => {
    try {
        const shipment = await Shipment.findById(req.params.id);

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found",
            });
        }

        await shipment.deleteOne();

        res.status(200).json({
            success: true,
            message: "Shipment deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createShipment,
    getAllShipments,
    getShipmentById,
    updateShipment,
    deleteShipment,
};