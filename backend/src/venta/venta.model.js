const { model, Schema } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const ventaSchema = new Schema({
  id_veterinaria: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinaria,
    autopopulate: true,
    required: true,
  },
  id_cliente: {
    type: Schema.Types.ObjectId,
    ref: collection.cliente,
    autopopulate: true,
    required: true,
  },
  id_producto: {
    type: Schema.Types.ObjectId,
    ref: collection.producto,
    autopopulate: true,
    required: true,
  },
  id_detalle_venta: {
    type: Schema.Types.ObjectId,
    ref: collection.venta_detalle,
    autopopulate: true,
    required: true,
  },
  fecha_venta: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

ventaSchema.plugin(require('mongoose-autopopulate'));
const Venta = model(collection.venta, ventaSchema);

module.exports = { Venta };
