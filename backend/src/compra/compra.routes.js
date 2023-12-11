const { Router } = require("express");
const { getCompras, newCompra, editCompra, getCompra } = require("./compra.controller");

const router = Router();

router.get("/compras", getCompras);
router.post("/compras", newCompra);
router.patch("/compras/:id", editCompra);
router.get("/compras/:id", getCompra);

module.exports = router;
