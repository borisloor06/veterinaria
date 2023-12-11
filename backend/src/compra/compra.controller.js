const {
  getAllDocuments,
  insertNewDocument,
  editDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { Compra } = require("./compra.model");

const getCompras = async (req, res) => {
  try {
    const compras = await getAllDocuments(Compra);
    res.status(200).json(compras);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getCompra = async (req, res) => {
  const { id } = req.params;
  try {
    const compra = await getDocumentById(Compra, id);
    res.status(200).json(compra);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newCompra = async (req, res) => {
  const {
    id_veterinaria,
    id_producto,
    id_proveedor,
    id_compra_detalle,
    fecha_compra,
  } = req.body;
  try {
    const compra = await insertNewDocument(Compra, {
      id_veterinaria,
      id_producto,
      id_proveedor,
      id_compra_detalle,
      fecha_compra,
    });
    res.status(200).json(compra);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editCompra = async (req, res) => {
  const {
    id_veterinaria,
    id_producto,
    id_proveedor,
    id_compra_detalle,
    fecha_compra,
  } = req.body;
  const { id } = req.params;
  try {
    const compra = await editDocument(
      Compra,
      { _id: id },
      {
        id_veterinaria,
        id_producto,
        id_proveedor,
        id_compra_detalle,
        fecha_compra,
      }
    );
    res.status(200).json(compra);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getCompras,
  newCompra,
  editCompra,
  getCompra,
};
