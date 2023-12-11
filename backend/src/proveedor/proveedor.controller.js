const {
  getAllDocuments,
  insertNewDocument,
  editDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { Proveedor } = require("./proveedor.model");

const getProveedores = async (req, res) => {
  try {
    const proveedores = await getAllDocuments(Proveedor);
    res.status(200).json(proveedores);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getProveedor = async (req, res) => {
  const { id } = req.params
  try {
    const proveedor = await getDocumentById(Proveedor, id);
    res.status(200).json(proveedor);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newProveedor = async (req, res) => {
  const { ruc, nombre, apellido } = req.body;
  try {
    const mascota = await insertNewDocument(Proveedor, {
      ruc,
      nombre,
      apellido,
    });
    res.status(200).json(mascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editProveedor = async (req, res) => {
  const { ruc, nombre, apellido } = req.body;
  const { id } = req.params;
  try {
    const mascota = await editDocument(
      Proveedor,
      { _id: id },
      {
        ruc,
        nombre,
        apellido,
      }
    );
    res.status(200).json(mascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getProveedores,
  newProveedor,
  editProveedor,
  getProveedor,
};
