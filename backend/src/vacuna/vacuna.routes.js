const { Router } = require("express");
const { getVacunas, newVacuna, editVacuna, getVacuna } = require("./vacuna.controller");

const router = Router();

router.get("/vacunas", getVacunas);
router.post("/vacunas", newVacuna);
router.patch("/vacunas/:id", editVacuna);
router.get("/vacunas/:id", getVacuna);

module.exports = router;
