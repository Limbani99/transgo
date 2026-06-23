const express = require("express");
const router = express.Router();

const {
    createShipment,
    getAllShipments,
    getShipmentById,
    updateShipment,
    deleteShipment,
} = require("../controllers/userController/shipmentController");

router.post("/create-shipment", createShipment);

router.get("/get-shipments", getAllShipments);

router.get("/get-shipment/:id", getShipmentById);

router.put("/update-shipment/:id", updateShipment);

router.delete("/delete-shipment/:id", deleteShipment);

module.exports = router;