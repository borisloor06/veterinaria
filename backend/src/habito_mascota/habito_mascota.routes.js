const { Router } = require("express");
const { getHabitosMascota, newHabitoMascota, editHabitoMascota, getHabitoMascota } = require("./habito_mascota.controller");

const router = Router();

router.get("/habitosMascota", getHabitosMascota);
router.post("/habitosMascota", newHabitoMascota);
router.patch("/habitosMascota/:id", editHabitoMascota);
router.get("/habitosMascota/:id", getHabitoMascota);

module.exports = router;
