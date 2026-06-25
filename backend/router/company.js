const express = require("express");
const route = express.Router()
const {
    createShipment,
    getAllShipments,
    getShipmentById,
    updateShipment,
    deleteShipment,
} = require("../controllers/userController/shipmentController");


route.get("/get-shipments", getAllShipments);

route.get("/get-shipment/:id", getShipmentById);

route.delete("/delete-shipment/:id", deleteShipment);

module.exports = route
