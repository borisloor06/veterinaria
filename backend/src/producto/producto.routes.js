const { Router } = require("express");
const { getProductos, newProducto, editProducto, getProducto } = require("./producto.controller");

const router = Router();

router.get("/productos", getProductos);
router.post("/productos", newProducto);
router.patch("/productos/:id", editProducto);
router.get("/productos/:id", getProducto);

module.exports = router;
