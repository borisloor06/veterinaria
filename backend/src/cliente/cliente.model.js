const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const clienteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  fecha_registro: {
    type: String,
    required: true,
  },
  ultima_visita: {
    type: String,
    required: true,
  },
  antiguedad: {
    type: String,
    required: true,
  },
  ci: {
    type: String,
    required: true,
  },
  num_mascotas: {
    type: Number,
    required: true,
  },
});

const Cliente = model(collection.cliente, clienteSchema);

module.exports = { Cliente };
