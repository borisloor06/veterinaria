const {
  getAllDocuments,
  insertNewDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { CompraDetalle } = require("./compra_detalle.model");

const getDetalleCompras = async (req, res) => {
  try {
    // const citas = await MongoDBAdapter.getAllDocuments("citas");
    const detalle_compras = await getAllDocuments(CompraDetalle);
    res.status(200).json(detalle_compras);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getDetalleCompra = async (req, res) => {
  const { id } = req.params
  try {
    const detalle_compra = await getDocumentById(CompraDetalle, id);
    res.status(200).json(detalle_compra);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newDetalleCompras = async (req, res) => {
  const {
    detalle_producto,
    valor_unitario,
    cantidad_producto,
    subtotal,
    iva,
    total,
  } = req.body;
  try {
    const data = await insertNewDocument(CompraDetalle, {
      detalle_producto,
      valor_unitario,
      cantidad_producto,
      subtotal,
      iva,
      total,
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editDetalleCompras = async (req, res) => {
  const {
    detalle_producto,
    valor_unitario,
    cantidad_producto,
    subtotal,
    iva,
    total,
  } = req.body;
  const { id } = req.params;
  try {
    const detalleUpdated = await insertNewDocument(
      CompraDetalle,
      { _id: id },
      {
        detalle_producto,
        valor_unitario,
        cantidad_producto,
        subtotal,
        iva,
        total,
      }
    );
    res.status(200).json(detalleUpdated);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getDetalleCompras,
  newDetalleCompras,
  editDetalleCompras,
  getDetalleCompra
};
