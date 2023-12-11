const mongoose = require("mongoose");
const { collection } = require("../../constants/collections.type");

const ventaDetalleSchema = new mongoose.Schema({
  detalle_producto: {
    type: String,
    required: true,
  },
  valor_unitario: {
    type: Number,
    required: true,
  },
  cantidad_venta: {
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

const VentaDetalle = mongoose.model(
  collection.venta_detalle,
  ventaDetalleSchema
);

module.exports = { VentaDetalle };
