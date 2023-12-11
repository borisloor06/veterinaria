const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const vacunaSchema = new Schema({
  id_mascota: {
    type: Schema.Types.ObjectId,
    ref: collection.mascota,
    autopopulate: true,
    required: true,
  },
  id_veterinario: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinario,
    autopopulate: true,
    required: true,
  },
  id_producto: {
    type: Schema.Types.ObjectId,
    ref: collection.producto,
    autopopulate: true,
    required: true,
  },
  fecha_aplicacion: {
    type: String,
    required: true,
  },
  dosis: {
    type: String,
    required: true,
  },
});

vacunaSchema.plugin(require("mongoose-autopopulate"));
const Vacuna = model(collection.vacuna, vacunaSchema);

module.exports = { Vacuna };
