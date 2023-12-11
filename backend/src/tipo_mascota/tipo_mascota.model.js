const mongoose = require("mongoose");
const { collection } = require("../../constants/collections.type");

const tipoMascotaSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
  },
});

const TipoMascota = mongoose.model(collection.tipo_mascota, tipoMascotaSchema);

module.exports = { TipoMascota };
