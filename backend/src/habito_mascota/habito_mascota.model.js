const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const habitoMascotaSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
});

const HabitoMascota = model(collection.habito_mascota, habitoMascotaSchema);

module.exports = { HabitoMascota };
