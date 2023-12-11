const {
  getAllDocuments,
  insertNewDocument,
  editDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { Venta } = require("./venta.model");

const getVentas = async (req, res) => {
  try {
    const ventas = await getAllDocuments(Venta);
    res.status(200).json(ventas);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getVenta = async (req, res) => {
  const { id } = req.params;
  try {
    const venta = await getDocumentById(Venta, id);
    res.status(200).json(venta);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newVenta = async (req, res) => {
  const {
    id_veterinaria,
    id_cliente,
    id_producto,
    id_venta_detalle,
    fecha_venta,
    descripcion,
  } = req.body;
  try {
    const venta = await insertNewDocument(Venta, {
      id_veterinaria,
      id_cliente,
      id_producto,
      id_venta_detalle,
      fecha_venta,
      descripcion,
    });
    res.status(200).json(venta);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editVenta = async (req, res) => {
  const {
    id_veterinaria,
    id_cliente,
    id_producto,
    id_venta_detalle,
    fecha_venta,
    descripcion,
  } = req.body;
  const { id } = req.params;
  try {
    const venta = await editDocument(
      Venta,
      { _id: id },
      {
        id_veterinaria,
        id_cliente,
        id_producto,
        id_venta_detalle,
        fecha_venta,
        descripcion,
      }
    );
    res.status(200).json(venta);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getVentas,
  newVenta,
  editVenta,
  getVenta
};
