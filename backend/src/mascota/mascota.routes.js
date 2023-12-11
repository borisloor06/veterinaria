const { Router } = require("express");
const { getMascotas, newMascota, editMascota, getMascota } = require("./mascota.controller");

const router = Router();

router.get("/mascotas", getMascotas);
router.get("/mascotas", newMascota);
router.patch("/mascotas/:id", editMascota);
router.get("/mascotas/:id", getMascota);

module.exports = router;
