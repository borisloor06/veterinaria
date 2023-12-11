const { Router } = require("express");
const { getDetalleCompras, newDetalleCompras, editDetalleCompras } = require("./compra_detalle.controller");

const router = Router();

router.get("/detalleCompras", getDetalleCompras);
router.post("/detalleCompras", newDetalleCompras);
router.patch("/detalleCompras/:id", editDetalleCompras);
router.get("/detalleCompras/:id", getDetalleCompras);

module.exports = router;
