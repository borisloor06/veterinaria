const mongoose = require("mongoose");
const { collection } = require("../../constants/collections.type");

const proveedorSchema = new mongoose.Schema({
  ruc: {
    type: String,
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

const Proveedor = mongoose.model(collection.proveedor, proveedorSchema);

module.exports = { Proveedor };
