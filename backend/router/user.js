const express = require("express");
const router = express.Router();

const {
    createShipment,
    getAllShipments,
    getShipmentById,
    updateShipment,
    deleteShipment,
} = require("../controllers/userController/shipmentController");

router.post("/", createShipment);

router.get("/", getAllShipments);

router.get("/:id", getShipmentById);

router.put("/:id", updateShipment);

router.delete("/:id", deleteShipment);

module.exports = router;