const { Router } = require("express");
const { getVentas, newVenta, editVenta, getVenta } = require("./venta.controller");

const router = Router();

router.get("/ventas", getVentas);
router.post("/ventas", newVenta);
router.patch("/ventas/:id", editVenta);
router.get("/ventas/:id", getVenta);

module.exports = router;
