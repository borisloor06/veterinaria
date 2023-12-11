const {
  getAllDocuments,
  insertNewDocument,
  editDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { TipoMascota } = require("./tipo_mascota.model");

const getTiposMascota = async (req, res) => {
  try {
    const tiposMascota = await getAllDocuments(TipoMascota);
    res.status(200).json(tiposMascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getTipoMascota = async (req, res) => {
  const { id } = req.params;
  try {
    const tipoMascota = await getDocumentById(TipoMascota, id);
    res.status(200).json(tipoMascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newTipoMascota = async (req, res) => {
  const { descripcion } = req.body;
  try {
    const tipoMascota = await insertNewDocument(TipoMascota, { descripcion });
    res.status(200).json(tipoMascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editTipoMascota = async (req, res) => {
  const { descripcion } = req.body;
  const { id } = req.params;
  try {
    const tipoMascota = await editDocument(
      TipoMascota,
      { _id: id },
      { descripcion }
    );
    res.status(200).json(tipoMascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getTiposMascota,
  newTipoMascota,
  editTipoMascota,
  getTipoMascota,
};
