const { Router } = require("express");
const { getVeterinaria, newVeterinaria, editVeterinaria, getVeterinarias } = require("./veterinaria.controller");

const router = Router();

router.get("/veterinaria", getVeterinarias);
router.post("/veterinaria", newVeterinaria);
router.patch("/veterinaria/:id", editVeterinaria);
router.get("/veterinaria/:id", getVeterinaria);

module.exports = router;
