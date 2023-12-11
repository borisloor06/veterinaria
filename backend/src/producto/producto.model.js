const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const productoSchema = new Schema({
  id_tipo_producto: {
    type: Schema.Types.ObjectId,
    ref: collection.tipo_producto,
    autopopulate: true,
    required: true,
  },
  nombre_producto: {
    type: String,
    required: true,
  },
});

productoSchema.plugin(require('mongoose-autopopulate'));
const Producto = model(collection.producto, productoSchema);

module.exports = { Producto };
