const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const citaSchema = new Schema({
  id_veterinario: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinario,
    autopopulate: true,
    required: true,
  },
  id_cliente: {
    type: Schema.Types.ObjectId,
    ref: collection.cliente,
    autopopulate: true,
    required: true,
  },
  fecha_programada: {
    type: String,
    required: true,
  },
});

citaSchema.plugin(require('mongoose-autopopulate'));
const Cita = model(collection.cita, citaSchema);

module.exports = { Cita };
