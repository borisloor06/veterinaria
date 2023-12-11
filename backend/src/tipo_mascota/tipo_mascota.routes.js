const { Router } = require("express");
const { getTipoMascota, newTipoMascota, editTipoMascota, getTiposMascota } = require("./tipo_mascota.controller");

const router = Router();

router.get("/tipoMascota", getTiposMascota);
router.post("/tipoMascota", newTipoMascota);
router.patch("/tipoMascota/:id", editTipoMascota);
router.get("/tipoMascota/:id", getTipoMascota);

module.exports = router;
