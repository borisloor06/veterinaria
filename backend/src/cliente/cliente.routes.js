const { Router } = require("express");
const { getClientes, newCliente, editCliente, getCliente } = require("./cliente.controller");

const router = Router();

router.get("/clientes", getClientes);
router.post("/clientes", newCliente);
router.patch("/clientes/:id", editCliente);
router.get("/clientes/:id", getCliente);

module.exports = router;
