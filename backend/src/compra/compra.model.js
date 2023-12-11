const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const compraSchema = new Schema({
  id_veterinaria: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinaria,
    autopopulate: true,
    required: true,
  },
  id_producto: {
    type: Schema.Types.ObjectId,
    ref: collection.producto,
    autopopulate: true,
    required: true,
  },
  id_proveedor: {
    type: Schema.Types.ObjectId,
    ref: collection.proveedor,
    autopopulate: true,
    required: true,
  },
  id_compra_detalle: {
    type: Schema.Types.ObjectId,
    ref: collection.compra_detalle,
    autopopulate: true,
    required: true,
  },
  fecha_compra: {
    type: String,
    required: true,
  },
});

compraSchema.plugin(require('mongoose-autopopulate'));
const Compra = model(collection.compra, compraSchema);

module.exports = { Compra };
