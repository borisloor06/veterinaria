const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const mascotaSchema = new Schema({
  id_cliente: {
    type: Schema.Types.ObjectId,
    ref: collection.cliente,
    autopopulate: true,
    required: true,
  },
  id_tipo_mascota: {
    type: Schema.Types.ObjectId,
    ref: collection.mascota,
    autopopulate: true,
    required: true,
  },
  id_habito: {
    type: Schema.Types.ObjectId,
    ref: collection.habito_mascota,
    autopopulate: true,
    required: true,
  },
  nombre_mascota: {
    type: String,
    required: true,
  },
  fecha_nacimiento: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  esterilizacion: {
    type: String,
    required: true,
  },
});

mascotaSchema.plugin(require('mongoose-autopopulate'));
const Mascota = model(collection.mascota, mascotaSchema);

module.exports = { Mascota };
