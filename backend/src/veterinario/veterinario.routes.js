const { Router } = require("express");
const { getVeterinarios, newVeterinario, editVeterinario, getVeterinario } = require("./veterinario.controller");

const router = Router();

router.get("/veterinarios", getVeterinarios);
router.post("/veterinarios", newVeterinario);
router.patch("/veterinarios/:id", editVeterinario);
router.get("/veterinarios/:id", getVeterinario);

module.exports = router;
