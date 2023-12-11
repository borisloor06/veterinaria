const { Router } = require("express");
const { getCitas, newCita, editCita } = require("./cita.controller");

const router = Router();

router.get("/citas", getCitas);
router.post("/citas", newCita);
router.patch("/citas/:id", editCita);

module.exports = router;
