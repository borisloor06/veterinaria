const mongoose = require("mongoose");
const { collection } = require("../../constants/collections.type");

const veterinariaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
});

const Veterinaria = mongoose.model(collection.veterinaria, veterinariaSchema);

module.exports = { Veterinaria };
