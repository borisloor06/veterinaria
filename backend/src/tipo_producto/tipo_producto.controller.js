const {
  getAllDocuments,
  insertNewDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { TipoProducto } = require("./tipo_producto.model");

const getTiposProducto = async (req, res) => {
  try {
    const tipos_producto = await getAllDocuments(TipoProducto);
    res.status(200).json(tipos_producto);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getTipoProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const tipo_producto = await getDocumentById(TipoProducto, id);
    res.status(200).json(tipo_producto);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newTipoProducto = async (req, res) => {
  const { nombre, detalle } = req.body;
  try {
    const data = await insertNewDocument(TipoProducto, { nombre, detalle });
    res.status(200).json(data);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editTipoProducto = async (req, res) => {
  const { nombre, detalle } = req.body;
  const { id } = req.params;
  try {
    const data = await editTipoProducto(
      TipoProducto,
      { _id: id },
      { nombre, detalle }
    );
    res.status(200).json(data);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getTiposProducto,
  newTipoProducto,
  editTipoProducto,
  getTipoProducto,
};
