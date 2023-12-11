const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const compraDetalleSchema = new Schema({
  detalle_producto: {
    type: String,
    required: true,
  },
  valor_unitario: {
    type: Number,
    required: true,
  },
  cantidad_producto: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  iva: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const CompraDetalle = model(collection.compra_detalle, compraDetalleSchema);

module.exports = { CompraDetalle };
