const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const veterinarioSchema = new Schema({
  id_veterinaria: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinaria,
    autopopulate: true,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
});

veterinarioSchema.plugin(require('mongoose-autopopulate'));
const Veterinario = model(collection.veterinario, veterinarioSchema);

module.exports = { Veterinario };
