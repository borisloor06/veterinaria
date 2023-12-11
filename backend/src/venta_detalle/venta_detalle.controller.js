const {
  getAllDocuments,
  insertNewDocument,
  editDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { VentaDetalle } = require("./venta_detalle.model");

const getVentasDetalle = async (req, res) => {
  try {
    const ventas_detalle = await getAllDocuments(VentaDetalle);
    res.status(200).json(ventas_detalle);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getVentaDetalle = async (req, res) => {
  const { id } = req.params;
  try {
    const venta_detalle = await getDocumentById(VentaDetalle, id);
    res.status(200).json(venta_detalle);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newVentaDetalle = async (req, res) => {
  const {
    detalle_producto,
    valor_unitario,
    cantidad_venta,
    subtotal,
    iva,
    total,
  } = req.body;
  try {
    const venta_detalle = await insertNewDocument(VentaDetalle, {
      detalle_producto,
      valor_unitario,
      cantidad_venta,
      subtotal,
      iva,
      total,
    });
    res.status(200).json(venta_detalle);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editVentaDetalle = async (req, res) => {
  const {
    detalle_producto,
    valor_unitario,
    cantidad_venta,
    subtotal,
    iva,
    total,
  } = req.body;
  const { id } = req.params;
  try {
    const venta_detalle = await editDocument(
      VentaDetalle,
      { _id: id },
      {
        detalle_producto,
        valor_unitario,
        cantidad_venta,
        subtotal,
        iva,
        total,
      }
    );
    res.status(200).json(venta_detalle);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getVentasDetalle,
  newVentaDetalle,
  editVentaDetalle,
  getVentaDetalle,
};
