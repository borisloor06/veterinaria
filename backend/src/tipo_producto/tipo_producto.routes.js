const { Router } = require("express");
const { getTipoProducto, newTipoProducto, editTipoProducto, getTiposProducto } = require("./tipo_producto.controller");

const router = Router();

router.get("/tipoProducto", getTiposProducto);
router.post("/tipoProducto", newTipoProducto);
router.patch("/tipoProducto/:id", editTipoProducto);
router.get("/tipoProducto/:id", getTipoProducto);

module.exports = router;
