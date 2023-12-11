const mongoose = require("mongoose");
const { collection } = require("../../constants/collections.type");

const tipoProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  detalle: {
    type: String,
    required: true,
  },
});

const TipoProducto = mongoose.model(
  collection.tipo_producto,
  tipoProductoSchema
);

module.exports = { TipoProducto };
