const { Router } = require("express");
const { getVentaDetalle, newVentaDetalle, editVentaDetalle, getVentasDetalle } = require("./venta_detalle.controller");

const router = Router();

router.get("/ventaDetalle", getVentasDetalle);
router.post("/ventaDetalle", newVentaDetalle);
router.patch("/ventaDetalle/:id", editVentaDetalle);
router.get("/ventaDetalle/:id", getVentaDetalle);

module.exports = router;
