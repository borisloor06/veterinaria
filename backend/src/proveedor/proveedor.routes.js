const { Router } = require("express");
const { getProveedores, newProveedor, editProveedor, getProveedor } = require("./proveedor.controller");

const router = Router();

router.get("/proveedores", getProveedores);
router.get("/proveedor", newProveedor);
router.patch("/proveedor/:id", editProveedor);
router.get("/proveedor/:id", getProveedor);

module.exports = router;
